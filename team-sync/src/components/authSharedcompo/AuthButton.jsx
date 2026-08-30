const AuthButton = ({
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-xl
        bg-[#B8D42B]
        px-5
        py-3.5
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(184,212,43,0.35)]
        active:scale-[0.98]
      "
    >
      <span className="relative z-10">
        {children}
      </span>

      <div
        className="
          absolute
          inset-0
          translate-y-full
          bg-white/20
          transition-transform
          duration-300
          group-hover:translate-y-0
        "
      />
    </button>
  );
};

export default AuthButton;