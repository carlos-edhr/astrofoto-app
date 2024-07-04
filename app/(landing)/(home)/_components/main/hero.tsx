import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className=" mt-20 sm:mt-5 md:mt-2 relative   flex flex-col h-screen w-screen">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
