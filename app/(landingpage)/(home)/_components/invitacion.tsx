"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";

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
   
    items-center
    justify-center
    rounded-xl
    overflow-hidden
    text-white
    p-6
   
    shadow-lg
    mt-8
    /* Gradient background */
    bg-gradient-to-b from-[#1c1c1c]  to-[#000000] 

  
  "
    >
      {/*after:border-[#78B3DB]*/}

      {/* Left Column - Video */}
      {/* <div
        className="
          w-1/2
          md:w-1/2
          aspect-square
          overflow-hidden
          rounded-md
          bg-black
        "
      > */}
      <div className="relative mx-auto w-[75vw] h-[75vw] max-w-[400px] max-h-[400px] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]">
        <Image
          src="/brand/CIAF8-Logo2.png"
          alt="Congress Logo"
          fill
          className="object-contain z-50"
          priority
          // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>
      {/* <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        /> */}
      {/* </div> */}
      {/* Right Column - Text & Button */}
      <div
        className="
          w-full
          flex
          flex-col
          mt-1
     
        "
      >
        {/* “Reels” badge or pill */}
        {/* <span
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
        </span> */}

        {/* Main heading */}
        {/* <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            mt-4
          "
        >
          Invitación al Congreso Internacional de Fotografía
        </h2> */}

        {/* Subtitle / body text */}
        <p
          className="
          font-robotoCondensed 
          font-[200]
            text-base
            md:text-lg
            mt-2
            leading-relaxed
            text-white
          "
        >
           Evento anual donde reunimos a varios fotógrafos, astrofotógrafos,
            astrónomos y divulgadores científicos de diferentes países con el
            objetivo de compartir a través de conferencias magistrales y de
            talleres que nos ayudan a crecer en esta bonita disciplina de
            capturar la luz del universo.
        </p>

        {/* Waitlist Button */}
        <div className="mt-6 flex w-full">
          <Button variant="azulAstro" size="lg" className="w-full">
            REGÍSTRATE
          </Button>
        </div>
      </div>
      {/* Redes Sociales */}
      <div className="mt-8 flex space-x-4">
        {/* Cada ícono dentro de un círculo */}
        <div className="p-2 rounded-full bg-cyan-500 text-black">
          <Facebook size={24} />
        </div>
        <div className="p-2 rounded-full bg-cyan-500 text-black">
          <Youtube size={24} />
        </div>
        <div className="p-2 rounded-full bg-cyan-500 text-black">
          <Instagram size={24} />
        </div>
        {/* <div className="p-2 rounded-full bg-cyan-500 text-black">
          <Whatsapp size={24} />
        </div> */}
      </div>
    </div>
  );
};
