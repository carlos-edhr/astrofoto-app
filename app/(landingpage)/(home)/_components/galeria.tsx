"use client";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import ImagenDeGaleria from "./imagen-de-galeria";

interface GaleriaProps {
  title: string;
  images: string[];
}

const Galeria: React.FC<GaleriaProps> = ({ title, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Carousel controls
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Open modal and show clicked image
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Set current image based on clicked thumbnail
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8  ">
      <div className="flex-1">
        <h1 className="mb-8 special-font section-heading   text-6xl sm:text-7xl lg:text-8xl  leading-none">
          Galería
        </h1>
      </div>
      {/* Outer grid: 2 columns on medium screens and above */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="relative h-[400px] md:h-auto">
          <ImagenDeGaleria images={images} imgIndex={0} />
        </div>

        {/* Right Column: Split into two rows */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top Row: Left (Text + Button) and Right (Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Text Section */}
            <div
              className="
         
            p-2
            rounded-xl 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-white/20 
            shadow-lg 
            text-slate-200
           
          "
            >
              <div className="flex flex-col justify-center  text-slate-100 p-6">
                <h3 className="text-xl font-light mt-1 mb-4">
                  <span className="italic">
                    El Universo a Través de Lentes Terrenales
                  </span>
                </h3>
                <p className="text-sm mb-6 leading-relaxed">
                  Descubre la fascinante belleza del cielo nocturno a través de
                  nuestra colección. Cada fotografía cuenta una historia de
                  descubrimiento, dedicación y asombro, reuniendo a
                  astrofotógrafos que comparten la pasión por desvelar los
                  misterios del cosmos. Prepárate para inspirarte con campos
                  estelares resplandecientes, nebulosas vibrantes y galaxias
                  distantes que nos recuerdan nuestro legado cósmico y las
                  infinitas fronteras del espacio.
                </p>
                <button className="w-fit justify-center align-middle rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  Ver Galería Completa
                </button>
              </div>
            </div>
            {/* Top Right Image */}
            <div className="relative h-[200px] md:h-auto">
              <ImagenDeGaleria images={images} imgIndex={1} />
              {/* <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Spot Name
                  <span className="text-sm bg-black/60 px-2 py-1 rounded">
                    ★ 4.7
                  </span>
                </h3>
                <p className="text-sm">SPOT LOCATION</p>
              </div> */}
            </div>
          </div>

          {/* Bottom Row: Two images side-by-side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Bottom-left Image */}
            <div className="relative h-[150px] md:h-auto">
              <ImagenDeGaleria images={images} imgIndex={1} />
              {/* <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Spot Name
                  <span className="text-sm bg-black/60 px-2 py-1 rounded">
                    ★ 4.2
                  </span>
                </h3>
                <p className="text-sm">SPOT LOCATION</p>
              </div> */}
            </div>

            {/* Bottom-right Image */}
            <div className="relative h-[150px] md:h-auto">
              <ImagenDeGaleria images={images} imgIndex={2} />
              {/* <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Spot Name
                  <span className="text-sm bg-black/60 px-2 py-1 rounded">
                    ★ 4.5
                  </span>
                </h3>
                <p className="text-sm">SPOT LOCATION</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
