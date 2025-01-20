"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ButtonHero from "./button-hero";
import { Telescope } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoPreview from "./video-review";
// This is the key part that can cause hydration issues
// if used directly at render-time:
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  /**
   * 1) Prevent SSR from rendering different HTML
   *    by ensuring we only run the `useMediaQuery` logic
   *    after the component has mounted.
   */
  const [isMounted, setIsMounted] = useState(false);

  // Once the component mounts, set isMounted to true.
  // This ensures that any DOM-dependent code runs only in the browser.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Now safely use useMediaQuery, but only if we've mounted.
  // Otherwise, we might guess incorrectly and cause a mismatch.
  const isMobileQuery = useMediaQuery({ query: "(max-width: 767px)" });
  const isMobile = isMounted && isMobileQuery;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const phrases = useMemo(
    () => [
      "Los secretos del cosmos, <br /> al alcance de tu cámara.",
      "Descubre la magia del universo <br /> en cada captura.",
      "El firmamento te espera; <br /> captura su grandeza.",
      "Cada estrella cuenta una historia, <br /> regístrala.",
      "Fotografía la noche y viaja <br /> más allá de lo visible.",
      "Ilumina el cielo oscuro <br /> con tu cámara.",
      "Trasciende la oscuridad, <br /> captura la luz de las estrellas.",
      "La mejor cámara es tu curiosidad, <br /> el cielo es tu lienzo.",
      "Cada disparo, un portal <br /> hacia el infinito.",
      "Alcanzando galaxias lejanas, <br /> un click a la vez.",
    ],
    [],
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState(phrases[0]);
  const phraseRef = useRef<HTMLParagraphElement>(null);

  // ─────────────────────────────────────────────────────────
  // Cycle through phrases every 7 seconds
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [phrases.length]);

  // ─────────────────────────────────────────────────────────
  // Fade-out -> switch phrase -> fade-in each time currentPhraseIndex changes
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!phraseRef.current) return;

    const tl = gsap.timeline();

    // Fade out the current text
    tl.to(phraseRef.current, {
      opacity: 0,
      duration: 1,
    });

    // Once invisible, update the phrase & keep invisible
    tl.add(() => {
      setDisplayedPhrase(phrases[currentPhraseIndex]);
      gsap.set(phraseRef.current, { opacity: 0 });
    });

    // Fade in the new phrase
    tl.to(phraseRef.current, {
      opacity: 1,
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, [currentPhraseIndex, phrases]);

  const totalVideos = 4;
  const nextVdRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos) {
      setLoading(false);
    }
  }, [loadedVideos, totalVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVdRef.current?.play();
            return undefined;
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "circle(0% at 50% 50%)",
    });
    gsap.from("#video-frame", {
      clipPath: "circle(50% at 50% 50%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    // Immediately set all .hero-heading offscreen & invisible
    gsap.set(".hero-heading", {
      opacity: 0,
      x: -10,
    });
    // Then animate them to final state
    gsap.to(".hero-heading", {
      x: 0,
      opacity: 1,
      duration: 2.9,
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  useGSAP(() => {
    // Animate hero paragraph and button
    gsap.from(".hero-paragraph", {
      y: "100%",
      opacity: 0,
      duration: 2.9,
      ease: "power2.out",
      stagger: 0.3,
    });
  }, []);

  const getVideoSrc = (index: number) => `videos/astrofoto-vid-${index}.mp4`;

  /**
   * 2) While not strictly required, you could guard the entire
   *    return if you want nothing to render until after mount.
   *    Often, though, you can render your layout, and simply
   *    conditionally render the small `isMobile` parts.
   */
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-slate-900"
      >
        <div className="relative w-full h-full">
          {/* Desktop-only mini video preview */}
          <div className="hidden md:block mask-clip-path absolute-center absolute z-50 w-64 h-64 sm:w-32 sm:h-32 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="w-64 h-64 sm:w-32 sm:h-32 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex,
            )}
            autoPlay
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
            onEnded={() => {
              // Next video in line
              setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
            }}
          />
        </div>

        {/**
         * FIRST TITLE (bottom-right) – Desktop only
         */}
        <h1
          className="
            hidden md:block
            special-font
            hero-heading
            absolute
            bottom-5
            right-5
            z-40
            bg-gradient-to-r
            from-sky-300
            to-sky-600
            bg-[length:200%_200%]
            bg-clip-text
            text-transparent
            animate-gradient-x
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
            ease-in-out
            hover:scale-110
          "
        >
          Astrofotografía
        </h1>

        {/*
          The CONGRESS TITLE + PHRASE + BUTTON
          Centered by default (mobile), left-positioned on >= sm
          We conditionally render "mobile version" vs "desktop version"
          based on isMobile
        */}
        <div
          className={`
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            sm:top-0 sm:left-10
            sm:translate-x-0 sm:translate-y-0
            z-40
            size-full
          `}
        >
          {/**
           * MOBILE RENDER
           */}
          {isMobile && (
            <div
              className={`
                absolute
                absolute-center
                mt-24
                px-5
                left-1/2 -translate-x-1/2
                sm:left-36 sm:translate-x-0
                sm:px-10
              `}
            >
              <h1 className=" special-font hero-heading text-blue-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                Congreso <br />
                Internacional de
                <span
                  className="
                    md:hidden 
                    block
                    special-font
                    hero-heading    
                    z-40
                    bg-gradient-to-r
                    from-sky-300
                    to-sky-600
                    bg-[length:200%_200%]
                    bg-clip-text
                    text-transparent
                    animate-gradient-x
                    drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
                    ease-in-out
                    hover:scale-110
                  "
                >
                  Astrofotografía
                </span>
              </h1>
              <p
                ref={phraseRef}
                className="hero-paragraph mb-5 max-w-64 font-robert-regular text-blue-100"
                dangerouslySetInnerHTML={{ __html: displayedPhrase }}
              />
              <ButtonHero
                id="watch-trailer"
                title="Regístrate"
                rightIcon={<Telescope className="size-5" />}
                containerClass="bg-sky-500 flex-center gap-1 hero-paragraph"
              />
            </div>
          )}

          {/**
           * DESKTOP RENDER
           */}
          {!isMobile && (
            <div
              className={`
                hidden md:block
                absolute
                mt-24
                px-5
                left-1/2 -translate-x-1/2
                sm:left-36 sm:translate-x-0
                sm:px-10
              `}
            >
              <h1 className=" special-font hero-heading text-blue-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                Congreso <br />
                Internacional de
                <span
                  className="
                    md:hidden 
                    block
                    special-font
                    hero-heading    
                    z-40
                    bg-gradient-to-r
                    from-sky-300
                    to-sky-600
                    bg-[length:200%_200%]
                    bg-clip-text
                    text-transparent
                    animate-gradient-x
                    drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
                    ease-in-out
                    hover:scale-110
                  "
                >
                  Astrofotografía
                </span>
              </h1>
              <p
                ref={phraseRef}
                className="hero-paragraph mb-5 max-w-64 font-robert-regular text-blue-100"
                dangerouslySetInnerHTML={{ __html: displayedPhrase }}
              />
              <ButtonHero
                id="watch-trailer"
                title="Regístrate"
                rightIcon={<Telescope className="size-5" />}
                containerClass="bg-sky-500 flex-center gap-1 hero-paragraph"
              />
            </div>
          )}
        </div>
      </div>

      {/**
       * SECOND TITLE (optional) —
       *  only for desktop
       */}
      <h1 className="hidden md:block special-font hero-heading absolute bottom-5 right-5 text-white">
        Astrofotografía
      </h1>

      {/**
       * Another example of a mobile-only block
       */}
      {isMobile && (
        <div
          className={`
            absolute
            absolute-center
            mt-24
            px-5
            left-1/2 -translate-x-1/2
            sm:left-36 sm:translate-x-0
            sm:px-10
          `}
        >
          <h1 className=" special-font hero-heading text-blue-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            <span
              className="
                md:hidden 
                block
                special-font
                hero-heading    
                text-white
                drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
              "
            >
              <span
                className="  bg-gradient-to-r
                    from-sky-300
                    to-sky-600
                    bg-[length:200%_200%]
                    bg-clip-text
                    text-transparent
                    animate-gradient-x
                    drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]
                    ease-in-out"
              >
                Congreso <br />
                Internacional de{" "}
              </span>
              Astrofotografía
            </span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
