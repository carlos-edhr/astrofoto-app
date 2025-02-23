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

      {/* Main Content */}
      <div className="container mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-4 md:pt-32 text-center">
        {/* Top Logo */}

        <div className="relative mx-auto w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]">
          <Image
            src="/brand/CIAF8-Logo8.png"
            alt="Congress Logo"
            fill
            className="object-contain z-50"
            priority
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
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
