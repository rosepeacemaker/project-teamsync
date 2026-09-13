import Login from "../../features/auth/ui/pages/Login";
import LetterGlitch from "./LetterGlitch"

const AuthLayout = ({ children }) => {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#080808]">
    
      <div className="relative z-10 w-full max-w-sm">
        <Login />
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;