"use client";
import React, { useState, useRef, useEffect } from "react";
import StarsCanvas from "./landing-star-background";
import Image from "next/image";
import FloatingArrow from "./floating-arrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
} from "lucide-react";

// Gallery categories with images
const galleryCategories = [
  {
    id: "inauguración",
    title: "Inauguración",
    items: [
      {
        id: "inaug-1",
        src: "/landing/2025/inaguracion-1.jpeg",
        alt: "inauguración 1",
      },
      {
        id: "inaug-2",
        src: "/landing/2025/inaguracion-2.jpeg",
        alt: "inauguración 2",
      },
      {
        id: "inaug-3",
        src: "/landing/2025/inaguracion-3.jpeg",
        alt: "inauguración 3",
      },
      {
        id: "inaug-4",
        src: "/landing/2025/inaguracion-4.jpeg",
        alt: "inauguración 4",
      },
      {
        id: "inaug-5",
        src: "/landing/2025/inaguracion-5.jpeg",
        alt: "inauguración 5",
      },
      {
        id: "inaug-6",
        src: "/landing/2025/inaguracion-6.jpeg",
        alt: "inauguración 6",
      },
    ],
  },
  {
    id: "alberto-levy",
    title: "Conferencia Alberto Levy",
    items: [
      {
        id: "al-1",
        src: "/landing/2025/alberto-levy-1.jpg",
        alt: "Alberto Levy 1",
      },
      {
        id: "al-2",
        src: "/landing/2025/alberto-levy-2.jpg",
        alt: "Alberto Levy 2",
      },
      {
        id: "al-3",
        src: "/landing/2025/alberto-levy-3.jpg",
        alt: "Alberto Levy 3",
      },
      {
        id: "al-4",
        src: "/landing/2025/alberto-levy-4.jpg",
        alt: "Alberto Levy 4",
      },
      {
        id: "al-5",
        src: "/landing/2025/alberto-levy-5.jpg",
        alt: "Alberto Levy 5",
      },
      {
        id: "al-6",
        src: "/landing/2025/alberto-levy-6.jpg",
        alt: "Alberto Levy 6",
      },
    ],
  },
  {
    id: "osvaldo-castillo",
    title: "Conferencia Osvaldo Castillo",
    items: [
      {
        id: "oc-1",
        src: "/landing/2025/osvaldo-castillo-1.jpeg",
        alt: "Osvaldo Castillo 1",
      },
      {
        id: "oc-2",
        src: "/landing/2025/osvaldo-castillo-2.jpeg",
        alt: "Osvaldo Castillo 2",
      },
      {
        id: "oc-3",
        src: "/landing/2025/osvaldo-castillo-3.jpeg",
        alt: "Osvaldo Castillo 3",
      },
      {
        id: "oc-4",
        src: "/landing/2025/osvaldo-castillo-4.jpeg",
        alt: "Osvaldo Castillo 4",
      },
      {
        id: "oc-5",
        src: "/landing/2025/osvaldo-castillo-5.jpeg",
        alt: "Osvaldo Castillo 5",
      },
      {
        id: "oc-6",
        src: "/landing/2025/osvaldo-castillo-6.jpeg",
        alt: "Osvaldo Castillo 6",
      },
    ],
  },
  {
    id: "lalo-juarez",
    title: "Conferencia Lalo Juárez",
    items: [
      {
        id: "lj-1",
        src: "/landing/2025/lalo-juarez-1.jpeg",
        alt: "Lalo Juárez 1",
      },
      {
        id: "lj-2",
        src: "/landing/2025/lalo-juarez-2.jpeg",
        alt: "Lalo Juárez 2",
      },
      {
        id: "lj-3",
        src: "/landing/2025/lalo-juarez-3.jpeg",
        alt: "Lalo Juárez 3",
      },
      {
        id: "lj-4",
        src: "/landing/2025/lalo-juarez-4.jpeg",
        alt: "Lalo Juárez 4",
      },
      {
        id: "lj-5",
        src: "/landing/2025/lalo-juarez-5.jpeg",
        alt: "Lalo Juárez 5",
      },
      {
        id: "lj-6",
        src: "/landing/2025/lalo-juarez-6.jpeg",
        alt: "Lalo Juárez 6",
      },
    ],
  },
  {
    id: "andres-noriega",
    title: "Conferencia Andrés Noriega",
    items: [
      {
        id: "an-1",
        src: "/landing/2025/andres-noriega-1.jpeg",
        alt: "Andrés Noriega 1",
      },
      {
        id: "an-2",
        src: "/landing/2025/andres-noriega-2.jpeg",
        alt: "Andrés Noriega 2",
      },
      {
        id: "an-3",
        src: "/landing/2025/andres-noriega-3.jpeg",
        alt: "Andrés Noriega 3",
      },
      {
        id: "an-4",
        src: "/landing/2025/andres-noriega-4.jpeg",
        alt: "Andrés Noriega 4",
      },
      {
        id: "an-5",
        src: "/landing/2025/andres-noriega-5.jpeg",
        alt: "Andrés Noriega 5",
      },
      {
        id: "an-6",
        src: "/landing/2025/andres-noriega-6.jpeg",
        alt: "Andrés Noriega 6",
      },
    ],
  },
  {
    id: "rifa-andromeda",
    title: "Rifa por Andrómeda Astroshop",
    items: [
      {
        id: "ra-1",
        src: "/landing/2025/rifa-andromeda-1.jpeg",
        alt: "Rifa Andrómeda 1",
      },
      {
        id: "ra-2",
        src: "/landing/2025/rifa-andromeda-2.jpeg",
        alt: "Rifa Andrómeda 2",
      },
      {
        id: "ra-3",
        src: "/landing/2025/rifa-andromeda-3.jpeg",
        alt: "Rifa Andrómeda 3",
      },
      {
        id: "ra-4",
        src: "/landing/2025/rifa-andromeda-4.jpeg",
        alt: "Rifa Andrómeda 4",
      },
      {
        id: "ra-5",
        src: "/landing/2025/rifa-andromeda-5.jpeg",
        alt: "Rifa Andrómeda 5",
      },
      {
        id: "ra-6",
        src: "/landing/2025/rifa-andromeda-6.jpeg",
        alt: "Rifa Andrómeda 6",
      },
    ],
  },
];

interface NewHeroProps {}

const NewHero: React.FC<NewHeroProps> = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMediaFullscreen, setIsMediaFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("inauguración");
  const containerRef = useRef<HTMLDivElement>(null);

  const galleryItems =
    galleryCategories.find((cat) => cat.id === activeCategory)?.items || [];

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (scale > 1) setPosition({ x, y });
    },
    onPinch: ({ offset: [d] }) => {
      setScale(Math.min(Math.max(1, scale + d / 100), 3));
    },
  });

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const toggleMediaFullscreen = () => {
    setIsMediaFullscreen(!isMediaFullscreen);
    if (!isMediaFullscreen) resetZoom();
  };

  const goToNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedItem.id,
    );
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
    resetZoom();
  };

  const goToPrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedItem.id,
    );
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
    resetZoom();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItem) {
        if (e.key === "Escape") {
          setSelectedItem(null);
          resetZoom();
        }
        if (e.key === "+") setScale((s) => Math.min(s + 0.25, 3));
        if (e.key === "-") setScale((s) => Math.max(s - 0.25, 1));
        if (e.key === "0") resetZoom();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "ArrowLeft") goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  return (
    <header
      ref={containerRef}
      className="bg-blackBackgroundNew z-10 relative min-h-screen overflow-hidden"
    >
      <StarsCanvas />

      {/* Top Bar with Logo and Button */}
      {/* <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src="/brand/CIAF8-Logo8.png"
            alt="Congress Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <Button
          onClick={() => scrollToSection("invitacion")}
          variant="azulAstro"
          size="lg"
          className="py-4 px-6 md:py-5 md:px-8 text-sm md:text-base font-robotoCondensed font-bold uppercase"
          asChild
        >
          <Link href="/auth/register" target="_blank">
            REGÍSTRATE
          </Link>
        </Button>
      </div> */}

      {/* Main Content - Gallery */}
      <div className="container mx-auto pt-32 pb-16 px-4 md:pt-40 text-center">
        {/* Logo */}
        <div className="relative mx-auto w-56 h-20  ">
          <img
            src="/brand/CIAF8-Logo8.png"
            alt="Congress Logo"
            className="object-contain z-50"
          />
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="font-robotoCondensed text-3xl md:text-4xl font-bebas text-white uppercase tracking-wider">
            <span className="text-azulAstro">VIII</span> CONGRESO INTERNACIONAL
            DE ASTROFOTOGRAFÍA
          </h1>
          <div className="w-32 h-1 bg-azulAstro rounded mt-4 mx-auto" />
        </motion.div> */}
        {/* Botón de registro - Nuevo elemento agregado */}
        <Button
          onClick={() => scrollToSection("invitacion")}
          variant="azulAstro"
          size="lg"
          className="my-8 py-7 px-12 text-xl md:text-2xl w-full max-w-xs md:max-w-sm font-robotoCondensed animate-pulse hover:animate-none"
          asChild
        >
          <Link href="/auth/register" target="_blank">
            {/* Link to registration page */}
            REGÍSTRATE AHORA
            <Image
              src="/brand/CIAF8-Estrella1.png"
              alt="Congress Logo"
              width={6}
              height={6}
              className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg> */}
          </Link>
        </Button>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-robotoCondensed font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-azulAstro text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-xl border-2 border-gray-700 bg-black/30 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-azulAstro animate-pulse" />
                  <span className="text-xs text-white">Ver</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Viewer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => {
              setSelectedItem(null);
              resetZoom();
              setIsMediaFullscreen(false);
            }}
          >
            <div
              className={`relative ${
                isMediaFullscreen
                  ? "w-screen h-screen"
                  : "w-full max-w-6xl max-h-screen"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-3 rounded-full hover:bg-azulAstro transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-3 rounded-full hover:bg-azulAstro transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.min(s + 0.25, 3));
                  }}
                  className="bg-black/70 p-2 rounded-full hover:bg-azulAstro transition-colors"
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.max(s - 0.25, 1));
                  }}
                  className="bg-black/70 p-2 rounded-full hover:bg-azulAstro transition-colors"
                >
                  <ZoomOut className="w-5 h-5 text-white" />
                </button>
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMediaFullscreen();
                  }}
                  className="bg-black/70 p-2 rounded-full hover:bg-azulAstro transition-colors"
                >
                  {isMediaFullscreen ? (
                    <Minimize2 className="w-5 h-5 text-white" />
                  ) : (
                    <Maximize2 className="w-5 h-5 text-white" />
                  )}
                </button> */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(null);
                    resetZoom();
                  }}
                  className="bg-black/70 p-2 rounded-full hover:bg-azulAstro transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Image Container */}
              <motion.div
                className={`relative ${
                  isMediaFullscreen ? "w-full h-full" : "aspect-video"
                }`}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  touchAction: "none",
                }}
                {...(bind() as any)}
              >
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  quality={100}
                  className="object-contain cursor-grab active:cursor-grabbing"
                  priority
                  sizes="100vw"
                />
              </motion.div>

              {/* Description */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-center font-robotoCondensed">
                  {
                    galleryCategories.find((cat) =>
                      cat.items.some((item) => item.id === selectedItem.id),
                    )?.title
                  }
                </p>
                <p className="text-center text-xs text-gray-400 mt-1 font-robotoCondensed">
                  Congreso Internacional de Astrofotografía
                </p>
              </div>

              {/* Zoom indicator */}
              {scale > 1 && (
                <div className="absolute top-4 left-4 bg-black/70 px-3 py-1.5 rounded-full text-white text-sm z-10 font-robotoCondensed">
                  Zoom: {Math.round(scale * 100)}%
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingArrow nextSectionId="invitacion" />
    </header>
  );
};

export default NewHero;
