"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export const Proximamente: React.FC = () => {
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
      id="proximamente"
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
      <h1
        className="
          text-center
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          font-bebas
          uppercase
          leading-tight
          tracking-wide
          mb-4
          text-white
        "
      >
        <span className=" text-azulAstro">IX CONGRESO INTERNACIONAL DE </span>
        ASTROFOTOGRAFÍA
      </h1>

      <h2
        className="
          text-center
          text-2xl
          md:text-3xl
          font-bold
          font-bebas
          uppercase
          tracking-widest
          mb-8
          text-white
        "
      >
        2026
      </h2>

      <p
        className="
          text-xl
          md:text-2xl
          text-center
          max-w-2xl
          mb-8
          text-gray-300
          font-robotoCondensed
        "
      >
        Más información próximamente
      </p>
    </div>
  );
};
