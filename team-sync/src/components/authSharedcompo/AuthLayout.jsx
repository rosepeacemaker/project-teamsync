import AnimationBackground from "./AnimationBackground"

const AuthLayout = ({ children }) => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-4 py-10">
      <AnimationBackground />

      <div className="relative z-10 w-full max-w-sm">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;