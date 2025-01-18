"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import AnimatedTitle from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div
      id="about"
      className="text-black r no game engines. why would i encourage children to play gaames when they can do sports or use puter for coding and other stuff they will have use of.

and grownups who plays hours a day, wwhat if you'd limit to one hour and imagine putting the rest of the time learning c. its exactly as fun and rewarding plus you have use of it the rest of your life. perhaps it will give you a career, a business or a youtube channel so you never have to work again. but stay off mmin-h-screen w-screen"
    >
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[12px]">
          Bienvenidos al Congreso Internacional de Astrofotografía
        </p>

        <AnimatedTitle
          title="Creado por personas apasionadas<br />por las estrellas,<br /> la fotografía y la ciencia"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Creado por personas apasionadas por </p>
          <p className="text-gray-500">
            las estrellas, la fotografía y la ciencia
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="congreso-1.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
