"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer
      className="
      relative
      w-full
      bg-[#191919]
      text-white
      pt-16
      pb-8
      px-6
      md:px-10
      font-robotoCondensed
      border-t
      border-gray-800
    "
    >
      <div
        className="
        max-w-[1280px]
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        mb-12
      "
      >
        {/* Columna Izquierda */}
        <div>
          <h2
            className="
            text-4xl
            font-bold
            uppercase
            tracking-wider
            mb-8
            text-azulAstro
          "
          >
            NOSOTROS
          </h2>

          <p
            className="
            text-gray-300
            leading-relaxed
            mb-6
          "
          >
            El Congreso Internacional de Astrofotografía es un evento pionero en
            México, fundado en 2018 con el objetivo de reunir a profesionales y
            entusiastas de la fotografía astronómica para compartir
            conocimientos y experiencias.
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        </div>

        {/* Columna Central */}
        <div>
          <h3
            className="
            text-2xl
            font-bold
            uppercase
            tracking-wider
            mb-8
            text-azulAstro
          "
          >
            SIGUENOS
          </h3>

          <ul className="space-y-4 mb-10">
            <li>
              <Link
                href="#"
                className="
                text-gray-300
                hover:text-azulAstro
                transition-colors
                text-lg
              "
              >
                CMP
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="
                text-gray-300
                hover:text-azulAstro
                transition-colors
                text-lg
              "
              >
                Fortaleches
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="
                text-gray-300
                hover:text-azulAstro
                transition-colors
                text-lg
              "
              >
                pikomplikatorsi
              </Link>
            </li>
          </ul>

          <h3
            className="
            text-2xl
            font-bold
            uppercase
            tracking-wider
            mb-8
            text-azulAstro
            mt-12
          "
          >
            SIGN UP!
          </h3>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="
              bg-azulAstro
              p-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition-all
            "
            >
              <Youtube size={24} />
            </Link>
            <Link
              href="#"
              className="
              bg-azulAstro
              p-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition-all
            "
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="
              bg-azulAstro
              p-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition-all
            "
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>

        {/* Columna Derecha - Placeholder para imagen */}
        <div
          className="
          hidden
          md:flex
          items-center
          justify-center
        "
        >
          <div
            className="
            bg-gray-200
            border-2
            border-dashed
            rounded-xl
            w-full
            h-64
            flex
            items-center
            justify-center
            text-gray-500
          "
          >
            Imagen de Pie de Página
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div
        className="
        max-w-[1280px]
        mx-auto
        w-full
        h-px
        bg-gray-800
        my-8
      "
      ></div>

      {/* Información inferior */}
      <div
        className="
        max-w-[1280px]
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        text-gray-400
        text-center
        md:text-left
      "
      >
        <div
          className="
          flex
          items-center
          justify-center
          md:justify-start
        "
        >
          <a
            href="mailto:congress@kyorkitografia.com"
            className="
            hover:text-azulAstro
            transition-colors
            text-lg
          "
          >
            congress@kyorkitografia.com
          </a>
        </div>

        <div
          className="
          text-center
          text-lg
        "
        >
          © Congreso Internacional de Astrofotografía
        </div>

        <div
          className="
          flex
          items-center
          justify-center
          md:justify-end
        "
        >
          <span className="text-lg">Developed with ❤️ by</span>
          <span
            className="
            ml-2
            font-bold
            text-azulAstro
            text-lg
          "
          >
            cafete.ebr
          </span>
        </div>
      </div>
    </footer>
  );
};
