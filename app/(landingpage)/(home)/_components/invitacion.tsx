"use client"; // Needed so React can run client-side effects in Next.js App Router

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

interface InvitacionProps {
  videoSrc: string;
}

export const Invitacion: React.FC<InvitacionProps> = ({ videoSrc }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Create an animation timeline that lifts and scales the card slightly
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.2,
      ease: "power1.out",
    });

    // Play the animation on mouse enter, reverse it on mouse leave
    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners on unmount
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="
    relative
    w-full
    max-w-[980px]
    mx-auto
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
    rounded-xl
    overflow-hidden
    text-white
    p-6
    md:p-12
    shadow-lg

    /* Gradient background */
    bg-gradient-to-br from-[#062945] via-[#030916] to-[#020814]

  
  "
    >
      {/*after:border-[#78B3DB]*/}

      {/* Left Column - Video */}
      <div
        className="
          w-1/2
          md:w-1/2
          aspect-square
          overflow-hidden
          rounded-md
          bg-black
        "
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Column - Text & Button */}
      <div
        className="
          w-full
          md:w-1/2
          flex
          flex-col
          mt-6
          md:mt-0
          md:ml-8
        "
      >
        {/* “Reels” badge or pill */}
        <span
          className="
            inline-block
            bg-gray-800
            text-gray-200
            text-xs
            font-semibold
            px-3
            py-1
            rounded-full
            uppercase
            tracking-wide
            w-max
          "
        >
          ¡Acompáñanos!
        </span>

        {/* Main heading */}
        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            mt-4
          "
        >
          Invitación al Congreso Internacional de Fotografía
        </h2>

        {/* Subtitle / body text */}
        <p
          className="
            text-base
            md:text-lg
            mt-4
            leading-relaxed
            text-gray-300
          "
        >
          ¡Te invitamos al Congreso Internacional de Fotografía 2025! Un espacio
          único donde la pasión por la imagen se encuentra con la ciencia y la
          creatividad. Únete a fotógrafos, investigadores y amantes del arte
          visual de todo el mundo en un evento lleno de conferencias, talleres y
          exposiciones que exploran el poder de la fotografía como herramienta
          artística, documental y científica. Dirigido a estudiantes,
          profesionales y público en general, este congreso es la oportunidad
          perfecta para aprender, inspirarte y conectar con una comunidad
          global. ¡No te lo pierdas!
        </p>

        {/* Waitlist Button */}
        <div className="mt-6">
          <Button variant="default" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};
