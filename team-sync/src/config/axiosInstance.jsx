import axios from 'axios';

export let axiosInstance = axios.create({
    baseURL: "https://team-sync-backend-n78w.onrender.com/api",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        let originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true;
            try {
                await axiosInstance.get("/auth/get-accessToken");
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.log("Token refresh failed", refreshError);
                window.location.href = "/";
                return Promise.reject(refreshError);
            }
        }
    }
);