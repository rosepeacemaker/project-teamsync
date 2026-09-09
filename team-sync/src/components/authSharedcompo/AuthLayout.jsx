import LetterGlitch from "./LetterGlitch"

const AuthLayout = ({ children }) => {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#080808]">
      <h1>
      Welcome to <span className="text-[#B8D42B]">TeamSync</span>
      </h1>

      <div className="relative z-10 w-full max-w-sm">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;