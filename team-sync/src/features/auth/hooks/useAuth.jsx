import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = () =>{

  
  let dispatch= useDispatch()

  let navigate = useNavigate();

 // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // This function runs after successful validation
  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
    dispatch(loginEmployee(data))
  };
  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };


  return {
    register,
    handleSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    errors,
    navigate 
  }
}