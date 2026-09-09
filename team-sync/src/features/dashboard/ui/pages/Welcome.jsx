
import LetterGlitch from "../../../../components/authSharedcompo/LetterGlitch";
import { useNavigate } from "react-router";

const Welcome = () => {

  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808]">

      {/* Background */}
      <LetterGlitch
        glitchSpeed={40}
        centerVignette={true}
        outerVignette={false}
        smooth
        speed={10}
        colors={["#2b4539", "#61dca3", "#61b3dc"]}
        showCenterVignette
        showOuterVignette={false}
      />

      {/* Welcome Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">

        <h1
          className="
            text-4xl md:text-6xl
            font-bold
            tracking-wide
            text-white
            drop-shadow-[0_0_15px_rgba(97,220,163,0.35)]
          "
        >
          Welcome to{" "}
          <span className="text-[#61dca3]">
            TeamSync
          </span>
        </h1>

        <p className="mt-4 max-w-md px-5 text-sm md:text-base text-[#b8dcd0]">
          Collaborate, connect and manage your team in one place.
        </p>

        <button
        
  type="button"
  text="Get Started"
  className="
    w-auto!
    min-w-[180px]
    rounded-xl
    border border-[#61dca3]
    bg-[#080808]/80
    px-7
    py-3
    font-semibold
    tracking-wide
    text-[#e5ede5]
    backdrop-blur-md
    shadow-[0_0_20px_rgba(97,220,163,0.2)]
    transition-all
    duration-300
    hover:bg-[#61dca3]!
    hover:text-[#080808]!
    hover:shadow-[0_0_30px_rgba(97,220,163,0.5)]
    hover:scale-105
    active:scale-95
  "
  onClick={() => navigate("/login")}
>
    Get Started
    </button>
      </div>
    </main>
  );
};

export default Welcome;

