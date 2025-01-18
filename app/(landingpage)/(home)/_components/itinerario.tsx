"use client";

import React, { useRef, useEffect } from "react";
import AnimatedTitle from "./animated-title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ButtonHero from "./button-hero";

gsap.registerPlugin(ScrollTrigger);

const FloatingImage = () => {
  const frameRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1) Pin or track the overlay until we scroll to a certain point
    ScrollTrigger.create({
      trigger: "#story", // The container for your Itinerario section
      start: "top bottom", // When the bottom of the viewport hits #story's top
      end: "top center", // Adjust as needed
      onEnter: () => {
        // 2) Fade out the black overlay when the user first enters the section
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 7,
          pointerEvents: "none", // So it no longer blocks clicks
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 1,
          pointerEvents: "auto",
          ease: "power2.out",
        });
      },
    });
  }, []);

  // (Optional) 3D tilt code for the image
  interface MouseMoveEvent extends React.MouseEvent<HTMLImageElement> {}

  const handleMouseMove = (e: MouseMoveEvent) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="relative w-screen min-h-dvh bg-slate-600 ">
      {/*
        1) Black overlay that covers the entire <Itinerario /> section.
        We'll fade this out with GSAP when user scrolls here.
      */}
      <div
        ref={overlayRef}
        className="pointer-events-auto absolute inset-0 z-50 bg-black"
        style={{ opacity: 1 }}
      />

      <div className="flex size-full flex-col items-center py-10 pb-24 relative z-10">
        <p className="font-general text-sm uppercase md:text-[10px] text-white">
          Conferencias y talleres
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Itinerario"
            containerClass="text-green mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="2024-CIAF7_Invitados.jpg"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              A lo largo de las sesiones, expertos en astrofotografía...
            </p>

            <ButtonHero
              id="realm-btn"
              title="Descargar Itinerario"
              containerClass="mt-5 bg-blue-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
