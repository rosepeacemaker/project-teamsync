import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import AuthInput from "../../../../components/authSharedcompo/AuthInput";
import AuthButton from "../../../../components/authSharedcompo/AuthButton";
import AuthLAyout from "../../../../components/authSharedcompo/AuthLayout";
import { useAuth } from "../../hooks/useAuth";



const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  

let {register, handleSubmit, errors ,onRegisterSubmit,navigate} = useAuth();
  return (
    <AuthLAyout>
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

        <div className="mb-8 text-center">
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
            <User className="text-[#B8D42B]" />
          </div>

          <h1 className="text-3xl font-semibold text-white">
            Create account
          </h1>

          <p className="mt-3 text-sm text-white/50">
            Join us and get started today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onRegisterSubmit)}
          className="space-y-5"
        >
          {/* Name */}

          <AuthInput
            label="Full name"
            type="text"
            placeholder="John Doe"
            icon={User}
            error={errors.name}
            register={register("name", {
              required: "Name is required",
            })}
          />

          {/* Email */}

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
                placeholder="Minimum 6 characters"
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
                className="text-white/40 hover:text-[#B8D42B]"
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

          {/* Submit */}

          <AuthButton type="submit">
            Create account
          </AuthButton>
        </form>

        <p className="mt-7 text-center text-sm text-white/50">
          Already have an account?{" "}
          <button
          onClick={()=>navigate("/")}
            className="font-medium text-[#B8D42B] hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </AuthLAyout>
  );
};

export default Register;