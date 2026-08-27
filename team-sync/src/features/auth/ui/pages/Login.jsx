import { useState } from "react";


import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import AuthLayout from "../../../../../src/components/auth/AuthLayout";
import AuthInput from "../../../../../src/components/auth/AuthInput";
import AuthButton from "../../../../../src/components/auth/AuthButton";
import { useAuth } from "../../hooks/useAuth";
import {  useNavigate } from "react-router";

const Login = () => {
  // Show or hide password
  const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

 let {register, handleSubmit, errors ,onLoginSubmit} = useAuth();

  return (
    <AuthLayout>
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-[#111111]/80
          p-6
          shadow-2xl
          backdrop-blur-xl
          sm:p-10
        "
      >
        {/* Heading */}

        <div className="mb-10 text-center">
          <div
            className="
              mx-auto
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#B8D42B]/30
              bg-[#B8D42B]/10
            "
          >
            <Lock className="text-[#B8D42B]" />
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Welcome back
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Enter your details to continue to your account.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          className="space-y-6"
        >
          <AuthInput
            label="Email address"
            type="email"
            placeholder="you@example.com"
            icon={Mail}
            error={errors.email}
            register={register("email", {
              required: "Email is required",
            })}
          />

          {/* Password */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Password
            </label>

            <div
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                border
                bg-black/40
                px-4
                py-3
                transition-all
                duration-300
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-white/10 focus-within:border-[#B8D42B]/70"
                }
              `}
            >
              <Lock
                size={19}
                className="text-[#B8D42B]"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/30
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-white/40 transition hover:text-[#B8D42B]"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}

          <AuthButton type="submit">
            Sign in to account
          </AuthButton>
        </form>

        {/* Register Link */}

        <p className="mt-8 text-center text-sm text-white/50">
          Don't have an account?{" "}
          <button
            onClick={()=>navigate("/home")}
            className="font-medium text-[#B8D42B] transition hover:underline"
          >
            Create account
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;