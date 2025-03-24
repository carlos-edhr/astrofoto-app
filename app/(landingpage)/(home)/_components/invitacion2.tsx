"use client";

import * as React from "react";
import Image from "next/image";
import FloatingArrow from "./floating-arrow";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Invitacion2() {
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

  const invitation = [
    {
      name: "INVITACIÓN AL CONGRESO INTERNACIONAL DE ASTROFOTOGRAFÍA",
      videoUrl: "/astrophotography-vid1.webm",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. sa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt. Neque porto quisquam est, qui dolorem ipsum quia dolor sit amet,",
      socialLinks: {
        facebook: "https://www.facebook.com/kane.leyva",
        instagram: "https://www.instagram.com/kaneleyva/",
        website: "https://www.caneckleyva.com/",
      },
    },
  ];

  return (
    <section
      id="invitacion2"
      ref={cardRef}
      className="relative w-full max-w-[1380px] mt-16 py-16 overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#000000] mx-auto"
    >
      <div className="container mx-auto px-4 md:px-8 z-30 md:pb-32">
        <h1 className="font-bebas text-4xl font-bold text-center mb-12 uppercase text-white">
          ¡ACOMPÁÑANOS!
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
          {invitation.map((element) => (
            <React.Fragment key={element.name}>
              {/* Video Container */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div
                  className="w-full max-w-[600px] 
                aspect-w-16 aspect-h-9
                bg-gray-800 rounded-xl overflow-hidden"
                >
                  <video
                    src="/videos/caneck-leyva-fundador.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h2 className="font-bebas text-plata text-4xl font-bold uppercase ">
                  INVITACIÓN AL CONGRESO INTERNACIONAL DE
                </h2>
                <h1 className="font-bebas text-plata text-5xl font-bold uppercase mb-2">
                  ASTROFOTOGRAFÍA
                </h1>

                <div className="h-0.5 w-full bg-azulAstro mb-8" />

                <p className="text-white leading-relaxed text-left mb-8">
                  {element.description}
                </p>

                {/* Waitlist Button */}
                <div className="mt-6 flex w-1/2">
                  <Link
                    href={`${process.env.NEXTAUTH_URL}/auth/register`}
                    className="w-full"
                  >
                    <Button
                      variant="plateado"
                      size="lg"
                      className="w-full font-bebas "
                    >
                      <h1 className="font-bebas text-3xl">REGÍSTRATE</h1>
                    </Button>
                  </Link>
                </div>
                {/* {Object.keys(element.socialLinks).length > 0 && (
                  <div className="flex gap-6 mt-4">
                    {element.socialLinks.facebook && (
                      <a
                        href={element.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          width={32}
                          height={32}
                          src={"/brand/icons/Icon-FB2.png"}
                          alt="Facebook"
                        />
                      </a>
                    )}
                  </div>
                )} */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <FloatingArrow nextSectionId="talleres" />
    </section>
  );
}
