"use client";
// components/LogoCarousel.tsx
import React from "react";
import MarQuee from "react-fast-marquee";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const logos = [
  { url: "/colaboradores/Ana Ley 02.png" },
  { url: "/colaboradores/CL Logo Black2.png" },
  { url: "/colaboradores/Conchita-LogoRestaurante-01.png" },
  { url: "/colaboradores/IFN Logo General2.png" },
  { url: "/colaboradores/LF Logo T2.png" },
  { url: "/colaboradores/Logo Andromeda1.png" },
  { url: "/colaboradores/Logo Andromeda4.png" },
  { url: "/colaboradores/Logo Brandon.png" },
  { url: "/colaboradores/Logo Caliente4.png" },
  { url: "/colaboradores/Logo CETYS2.png" },
  { url: "/colaboradores/Logo Cruz.png" },
  { url: "/colaboradores/Logo de santa cruz.png" },
  { url: "/colaboradores/Logo Fuego Santo W.png" },
  { url: "/colaboradores/Logo La Cuesta2.png" },
  { url: "/colaboradores/Logo Las Rocas.png" },
  { url: "/colaboradores/LogoNatGeo REVISTA W.png" },
  { url: "/colaboradores/Logo Optolong2.png" },
  { url: "/colaboradores/Logo PhotoPills W.png" },
  { url: "/colaboradores/Logo Sazón 2.png" },
  { url: "/colaboradores/Logos Canon-04.png" },
  { url: "/colaboradores/Logo ValeyStudio W.png" },
  { url: "/colaboradores/MAXICO_LOGO_Black (1).png" },
  { url: "/colaboradores/MTP LOGO VECTOR W.png" },
  { url: "/colaboradores/nebulb_logo+text-white.png" },
  { url: "/colaboradores/Observatorio Astronómico Altair Logo.png" },
  {
    url: "/colaboradores/SANTAVAL PASTELERIA - VERSION CUADRADA - AI - COLOR-01.png",
  },
  { url: "/colaboradores/SDM logo circular v2 blanco.png" },
  { url: "/colaboradores/SDM logo cuadrado blanco.png" },
  { url: "/colaboradores/SDM logo rectangular blanco.png" },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-[150px] mb-10 ">
      <div className="relative w-full h-full overflow-hidden flex justify-center">
        <div className="absolute w-[75%] h-full">
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
        className="object-contain "
      />
    </div>
  );
};
export default LogoCarousel;
