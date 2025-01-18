//hero.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import ButtonHero from "./button-hero";
import { Telescope } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoPreview from "./video-review";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [randomPhrase, setRandomPhrase] = useState(""); // 1) State for the random text

  // 2) Our pool of possible phrases
  const phrases = [
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
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState(phrases[0]);

  // Reference to the paragraph we’ll animate
  const phraseRef = useRef<HTMLParagraphElement>(null);

  // ─────────────────────────────────────────────────────────
  // 2) Cycle through phrases every 7 seconds
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  // ─────────────────────────────────────────────────────────
  // 3) Create a timeline to fade out -> change phrase -> fade in
  //    each time currentPhraseIndex changes
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!phraseRef.current) return;

    const tl = gsap.timeline();

    // 3.1) Fade out the current text
    tl.to(phraseRef.current, {
      opacity: 0,
      duration: 1, // fade-out duration
    });

    // 3.2) Once it's invisible, update the phrase & keep it invisible
    tl.add(() => {
      setDisplayedPhrase(phrases[currentPhraseIndex]);
      gsap.set(phraseRef.current, { opacity: 0 });
    });

    // 3.3) Fade in the new phrase
    tl.to(phraseRef.current, {
      opacity: 1,
      duration: 1, // fade-in duration
    });

    // Clean up if component unmounts mid-animation
    return () => {
      tl.kill();
      return undefined;
    };
  }, [currentPhraseIndex, phrases]);
  const totalVideos = 4;
  const nextVdRef = useRef(null);

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
          //@ts-ignore
          onStart: () => nextVdRef.current.play(),
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
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
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

    // Then animate them to their final state
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
      y: "100%", // Start from left (outside the screen)
      opacity: 0, // Start invisible
      duration: 2.9, // Animation duration
      ease: "power2.out",
      stagger: 0.3, // Delay each H1 slightly for a nice stagger effect
    });
  }, []);

  const getVideoSrc = (index: any) => `videos/astrofoto-vid-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
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
                  className="size-64 origin-center scale-150 object-cover object-center"
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
              // Update currentIndex to the next video.
              // If you're at the last video (i.e., totalVideos), loop around to 1 again.
              setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
            }}
          />
        </div>

        {/**
         * PRIMER TÍTULO con gradiente animado
         */}
        <h1
          className="
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

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              Congreso <br />
              Internacional de
            </h1>

            {/**
             * 5) Use displayedPhrase for text,
             *    and attach phraseRef for GSAP anims
             */}
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
        </div>
      </div>

      {/**
       * SEGUNDO TÍTULO con gradiente animado
       * (Si deseas ocultarlo o estilizarlo distinto, puedes modificar a conveniencia)
       */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Astrofotografía
      </h1>
    </div>
  );
};

export default Hero;
