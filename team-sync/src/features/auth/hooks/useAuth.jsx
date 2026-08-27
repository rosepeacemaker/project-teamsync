import { useForm } from "react-hook-form";

export let useAuth = () =>{
 // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // This function runs after successful validation
  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };
  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };
  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    errors
  }
}