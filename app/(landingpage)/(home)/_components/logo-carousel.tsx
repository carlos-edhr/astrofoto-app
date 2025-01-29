"use client";
// components/LogoCarousel.tsx
import React from "react";
import MarQuee from "react-fast-marquee";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const logos = [
  { url: "/logos/Logo Andromeda4.png" },
  { url: "/logos/Logos Canon-02.png" },
  { url: "/logos/Logo CETYS2.png" },
  { url: "/logos/Logo Caliente4.png" },
  { url: "/logos/LogoNatGeo REVISTA W.png" },
  { url: "/logos/Logo Fuego Santo W.png" },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-[150px] mt-10 ">
      <div className="relative w-full h-full overflow-hidden flex justify-center">
        <div className="absolute w-[50%] h-full">
          <MarQuee
            direction="left"
            speed={30}
            gradient={false}
            className="flex items-center"
          >
            {logos.map((logo, index) => (
              <LogoItem key={index} logo={logo.url} />
            ))}
          </MarQuee>
        </div>
      </div>
    </div>
  );
};

interface LogoItemProps {
  logo: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the logo is visible
  });

  return (
    <div
      ref={ref}
      className={`mx-4 flex justify-center items-center transition-opacity duration-500 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={120}
        className="object-contain grayscale"
      />
    </div>
  );
};
export default LogoCarousel;
