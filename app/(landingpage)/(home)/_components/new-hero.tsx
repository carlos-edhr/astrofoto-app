//new-hero.tsx
"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import StarsCanvas from "./landing-star-background";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface NewHeroProps {
  // Add any props you need, e.g. custom text overrides, etc.
}

const NewHero: React.FC<NewHeroProps> = () => {
  const arrowRef = useRef<HTMLDivElement>(null);

  // Efecto de animación flotante con GSAP
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: -10, // Distancia que "flota" hacia arriba
      repeat: -1, // Repetición infinita
      yoyo: true, // Regresa a la posición original
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  // Función para hacer scroll suave hacia la siguiente sección
  const scrollToNextSection = () => {
    // Suponiendo que la siguiente sección tenga el id "nextSection"
    const nextSection = document.getElementById("nosotros");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-blackSpace z-10 relative min-h-screen overflow-hidden">
      <StarsCanvas />
      {/* Navigation */}
      {/* <nav className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide md:gap-8">
            {["NOSOTROS", "FECHAS", "ITINERARIO", "BOLETOS", "PRODUCTOS"].map(
              (item) => (
                <a
                  key={item}
                  className="whitespace-nowrap text-sm text-white/90 hover:text-white md:text-base"
                >
                  {item}
                </a>
              ),
            )}
          </div>
          <a className="text-sm text-white/90 hover:text-white md:text-base">
            LOG IN
          </a>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-4 md:pt-32 text-center">
        {/* Top Logo */}
        {/* <Image
          src="/brand/CIAF8-Estrella3.png"
          alt="Congress Logo"
          layout="fill"
        /> */}
        <div className="relative mx-auto w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]">
          <Image
            src="/brand/CIAF8-Logo2.png"
            alt="Congress Logo"
            fill
            className="object-contain z-50"
            priority
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* <img
          src="/brand/CIAF8-Estrella3.png"
          alt="Congress Logo"
          className="mb-6 w-20 md:mb-8 md:w-28 lg:w-32"
        />

        <h1 className="max-w-6xl text-balance uppercase tracking-wide text-white">
          <span className="text-azulAstro block text-3xl font-medium md:text-4xl lg:text-5xl">
            VIII CONGRESO INTERNACIONAL DE
          </span>
          <span className="my-4 block text-4xl font-bold md:my-6 md:text-6xl lg:text-7xl">
            ASTROFOTOGRAFÍA
          </span> */}

        {/* Mexico 2025 with decorative elements */}
        {/* <div className="relative inline-flex items-center justify-center gap-4"> */}
        {/* Left decorative image */}
        {/* <img
              src="/brand/decoracion.png"
              alt=""
              className="hidden h-4 md:block md:h-6"
            />

            <span className="block text-2xl font-semibold md:text-4xl lg:text-5xl">
              MEXICO 2025
            </span> */}

        {/* Right decorative image */}
        {/* <img
              src="/brand/decoracion.png"
              alt=""
              className="hidden h-4 md:block md:h-6"
            /> */}
        {/* </div>
        </h1> */}
      </div>
      {/* Flecha flotante para hacer scroll a la siguiente sección */}
      <div
        ref={arrowRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ArrowDown className="h-10 w-10 text-white" />
      </div>
    </header>
  );
};

export default NewHero;
