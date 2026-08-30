import { createSlice } from "@reduxjs/toolkit";

let authSlice = createSlice({
    name: "auth",
    initialState: {
        employee: null,
        isLoading: false,
    },
    reducers: {
        addEmployee:(state , action) =>{
            state.employee = action.payload;
            state.isLoading = false;
        },
        removeEmployee:(state)=>{
            state.employee = null;
            state.isLoading = false;
        }
    },
// extraReducers ==> pori api k pending state/ fullfill state/ or rejected state py kaam krta ...
    extraReducers:  (builder) =>{
        builder.addCase(loginEmployee.pending,(state) =>{
            state.isLoading = true
        })
        .addCase(loginEmployee.fulfilled, (state, action) =>{
            state.employee = action.payload;
            state.isLoading = false
        })
        .addCase(loadingEmployee.rejected, (state) =>{
            state.isLoading = false
        })
    }
})

 export let { addEmployee, removeEmployee} = authSlice.actions
 export default authSlice.reducer
