"use client";
import React, { useRef } from "react";
import StarsCanvas from "./landing-star-background";
import Image from "next/image";
import FloatingArrow from "./floating-arrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewHeroProps {
  // Add any props you need, e.g. custom text overrides, etc.
}

const NewHero: React.FC<NewHeroProps> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-blackBackgroundNew z-10 relative min-h-screen overflow-hidden">
      <StarsCanvas />

      {/* Main Content */}
      <div className="container mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-4 md:pt-32 text-center">
        {/* Logo */}
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

        {/* Botón de registro - Nuevo elemento agregado */}
        <Button
          onClick={() => scrollToSection("invitacion")}
          variant="azulAstro"
          size="lg"
          className="mt-10 py-7 px-12 text-xl md:text-2xl w-full max-w-xs md:max-w-sm font-robotoCondensed animate-pulse hover:animate-none"
          asChild
        >
          <Link href="/auth/register" target="_blank">
            {/* Link to registration page */}
            REGÍSTRATE AHORA
            <Image
              src="/brand/CIAF8-Estrella1.png"
              alt="Congress Logo"
              width={6}
              height={6}
              className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg> */}
          </Link>
        </Button>
      </div>

      <FloatingArrow nextSectionId="invitacion" />
    </header>
  );
};

export default NewHero;
