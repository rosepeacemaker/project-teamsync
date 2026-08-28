const AnimationBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Top Left Blob */}
      <div
        className="
          animate-blob-one
          absolute
          -top-32
          -left-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8D42B]/20
          blur-[120px]
        "
      />

      {/* Right Blob */}
      <div
        className="
          animate-blob-two
          absolute
          top-1/3
          -right-32
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#B8D42B]/15
          blur-[140px]
        "
      />

      {/* Bottom Blob */}
      <div
        className="
          animate-blob-three
          absolute
          -bottom-40
          left-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8D42B]/15
          blur-[130px]
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
    </div>
  );
};

export default AnimationBackground;