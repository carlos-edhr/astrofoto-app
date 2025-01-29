"use client";

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useState } from "react";

interface ImagenDeGaleriaProps {
  images: string[];
  imgIndex: number;
}
const ImagenDeGaleria = ({ images, imgIndex }: ImagenDeGaleriaProps) => {
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
    <div className="relative h-full w-full">
      <img
        src={images[currentImageIndex + imgIndex]}
        alt={`Slide ${currentImageIndex + imgIndex}`}
        className="h-full w-full object-cover cursor-pointer"
        onClick={() => openModal(currentImageIndex + imgIndex)}
      />
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full text-white shadow-lg"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full text-white shadow-lg"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      {/* Modal for Image Carousel */}
      {isModalOpen && (
        <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center flex-col scroll">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            >
              <XIcon className="w-8 h-8" />
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-screen object-contain"
            />
            {/* Modal Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full text-white shadow-lg"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full text-white shadow-lg"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails below main image */}
          <div className="flex mt-6 space-x-4 overflow-x-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg ${
                  currentImageIndex === index ? "ring-2 ring-white" : ""
                }`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagenDeGaleria;
