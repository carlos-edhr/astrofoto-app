//new-hero.tsx
"use client";
import React from "react";
import StarsCanvas from "./landing-star-background";

interface NewHeroProps {
  // Add any props you need, e.g. custom text overrides, etc.
}

const NewHero: React.FC<NewHeroProps> = () => {
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
      <div className="container mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-4 text-center">
        {/* Top Logo */}
        <img
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
          </span>

          {/* Mexico 2025 with decorative elements */}
          <div className="relative inline-flex items-center justify-center gap-4">
            {/* Left decorative image */}
            <img
              src="/brand/decoracion.png"
              alt=""
              className="hidden h-4 md:block md:h-6"
            />

            <span className="block text-2xl font-semibold md:text-4xl lg:text-5xl">
              MEXICO 2025
            </span>

            {/* Right decorative image */}
            <img
              src="/brand/decoracion.png"
              alt=""
              className="hidden h-4 md:block md:h-6"
            />
          </div>
        </h1>
      </div>
    </header>
  );
};

export default NewHero;
