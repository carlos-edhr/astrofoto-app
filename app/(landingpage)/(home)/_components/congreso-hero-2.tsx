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

// UPDATED GALLERY CATEGORIES
const galleryCategories = [
  {
    id: "rafael-pons",
    title: "Conferencia de Rafael Pons",
    items: [
      {
        id: "rafael-pons-7",
        src: "/landing/2025/rafael-pons-7.jpeg",
        alt: "Rafael Pons 8",
      },
      {
        id: "rafael-pons-1",
        src: "/landing/2025/rafael-pons-1.jpeg",
        alt: "Rafael Pons 1",
      },
      {
        id: "rafael-pons-2",
        src: "/landing/2025/rafael-pons-2.jpeg",
        alt: "Rafael Pons 2",
      },
      {
        id: "rafael-pons-3",
        src: "/landing/2025/rafael-pons-3.jpeg",
        alt: "Rafael Pons 3",
      },
      {
        id: "rafael-pons-4",
        src: "/landing/2025/rafael-pons-4.jpeg",
        alt: "Rafael Pons 4",
      },
      {
        id: "rafael-pons-5",
        src: "/landing/2025/rafael-pons-5.jpeg",
        alt: "Rafael Pons 5",
      },
      {
        id: "rafael-pons-6",
        src: "/landing/2025/rafael-pons-6.jpeg",
        alt: "Rafael Pons 6",
      },

      {
        id: "rafael-pons-8",
        src: "/landing/2025/rafael-pons-8.jpeg",
        alt: "Rafael Pons 8",
      },
    ],
  },
  {
    id: "toni-gutierrez",
    title: "Conferencia de Toni Gutiérrez",
    items: [
      {
        id: "toni-gutierrez-1",
        src: "/landing/2025/toni-gutierrez-1.jpeg",
        alt: "Toni Gutiérrez 1",
      },
      {
        id: "toni-gutierrez-2",
        src: "/landing/2025/toni-gutierrez-2.jpeg",
        alt: "Toni Gutiérrez 2",
      },
      {
        id: "toni-gutierrez-3",
        src: "/landing/2025/toni-gutierrez-3.jpeg",
        alt: "Toni Gutiérrez 3",
      },
      {
        id: "toni-gutierrez-4",
        src: "/landing/2025/toni-gutierrez-4.jpeg",
        alt: "Toni Gutiérrez 4",
      },
      {
        id: "toni-gutierrez-5",
        src: "/landing/2025/toni-gutierrez-5.jpeg",
        alt: "Toni Gutiérrez 5",
      },
      {
        id: "toni-gutierrez-6",
        src: "/landing/2025/toni-gutierrez-6.jpeg",
        alt: "Toni Gutiérrez 6",
      },
    ],
  },
  {
    id: "guillermo-cervantes",
    title: "Conferencia de Guillermo Cervantes",
    items: [
      {
        id: "guillermo-cervantes-1",
        src: "/landing/2025/guillermo-cervantes-1.jpeg",
        alt: "Guillermo Cervantes 1",
      },
      {
        id: "guillermo-cervantes-2",
        src: "/landing/2025/guillermo-cervantes-2.jpeg",
        alt: "Guillermo Cervantes 2",
      },
      {
        id: "guillermo-cervantes-3",
        src: "/landing/2025/guillermo-cervantes-3.jpeg",
        alt: "Guillermo Cervantes 3",
      },
      {
        id: "guillermo-cervantes-4",
        src: "/landing/2025/guillermo-cervantes-4.jpeg",
        alt: "Guillermo Cervantes 4",
      },
      {
        id: "guillermo-cervantes-5",
        src: "/landing/2025/guillermo-cervantes-5.jpeg",
        alt: "Guillermo Cervantes 5",
      },
      {
        id: "guillermo-cervantes-6",
        src: "/landing/2025/guillermo-cervantes-6.jpeg",
        alt: "Guillermo Cervantes 6",
      },
    ],
  },
  {
    id: "itzarel-hernandez",
    title: "Conferencia de Itzarel Hernández",
    items: [
      {
        id: "itzarel-hernandez-1",
        src: "/landing/2025/itzarel-hernandez-1.jpeg",
        alt: "Itzarel Hernández 1",
      },
      {
        id: "itzarel-hernandez-2",
        src: "/landing/2025/itzarel-hernandez-2.jpeg",
        alt: "Itzarel Hernández 2",
      },
      {
        id: "itzarel-hernandez-3",
        src: "/landing/2025/itzarel-hernandez-3.jpeg",
        alt: "Itzarel Hernández 3",
      },
      {
        id: "itzarel-hernandez-4",
        src: "/landing/2025/itzarel-hernandez-4.jpeg",
        alt: "Itzarel Hernández 4",
      },
      {
        id: "itzarel-hernandez-5",
        src: "/landing/2025/itzarel-hernandez-5.jpeg",
        alt: "Itzarel Hernández 5",
      },
      {
        id: "itzarel-hernandez-6",
        src: "/landing/2025/itzarel-hernandez-6.jpeg",
        alt: "Itzarel Hernández 6",
      },
    ],
  },
  {
    id: "fotografia-grupal",
    title: "Fotografía grupal",
    items: [
      {
        id: "fotografia-grupal-1",
        src: "/landing/2025/fotografia-grupal-1.jpeg",
        alt: "Fotografía grupal 1",
      },
      {
        id: "fotografia-grupal-2",
        src: "/landing/2025/fotografia-grupal-2.jpeg",
        alt: "Fotografía grupal 2",
      },
    ],
  },
];

interface CongresoHero2Props {}

const CongresoHero2: React.FC<CongresoHero2Props> = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMediaFullscreen, setIsMediaFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("rafael-pons"); // Updated default category
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

      {/* Main Content - Gallery */}
      <div className="container mx-auto  pb-16 px-4  text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
        {/* Logo */}
        {/* <div className="relative mx-auto w-56 h-20  ">
          <img
            src="/brand/CIAF8-Logo8.png"
            alt="Congress Logo"
            className="object-contain z-50"
          />
        </div> */}

        {/* Botón de registro */}
        {/* <Button
          onClick={() => scrollToSection("invitacion")}
          variant="azulAstro"
          size="lg"
          className="my-8 py-7 px-12 text-xl md:text-2xl w-full max-w-xs md:max-w-sm font-robotoCondensed animate-pulse hover:animate-none"
          asChild
        >
          <Link href="/auth/register" target="_blank">
            REGÍSTRATE AHORA
            <Image
              src="/brand/CIAF8-Estrella1.png"
              alt="Congress Logo"
              width={6}
              height={6}
              className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform"
            />
          </Link>
        </Button> */}

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

      {/* <FloatingArrow nextSectionId="invitacion" /> */}
    </header>
  );
};

export default CongresoHero2;
