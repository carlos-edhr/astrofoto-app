"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export const Mercancia: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out",
    });

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      id="mercancia"
      ref={cardRef}
      className="
        relative
        w-full
        max-w-[980px]
        mx-auto
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        text-white
        p-6
        md:p-10
        shadow-lg
        mt-8
        bg-[#191919]
        rounded-lg
        font-robotoCondensed
      "
    >
      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          mb-8
          uppercase
          tracking-wider
          text-white
          font-bebas
        "
      >
        Mercancía Próximamente a la Venta
      </h2>

      <div className="w-full max-w-md">
        <Image
          src="/landing/mercancia/merch-1.jpeg" // Actualizar con la ruta de tu imagen.png
          alt="Mercancía del congreso"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};
