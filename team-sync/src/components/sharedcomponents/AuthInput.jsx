const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  error,
  register,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white/80">
        {label}
      </label>

      <div
        className={`
          flex
          items-center
          gap-3
          rounded-xl
          border
          bg-black/40
          px-3
          py-2
          transition-all
          duration-300
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus-within:border-[#B8D42B]/70"
          }
        `}
      >
        {Icon && (
          <Icon
            size={17}
            className="text-[#B8D42B]"
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          {...register}
          className="
            w-full
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-white/30
          "
        />
      </div>

      {error && (
        <p className="text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default AuthInput;