import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

export const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[@2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/vector-3.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="ml-[10px] text-2xl font-semibold hidden md:block text-gray-300">
            Astrofoto
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Acerca del congreso
            </a>
            <a href="#skills" className="cursor-pointer">
              Participantes
            </a>
            <a href="#projects" className="cursor-pointer">
              Galería
            </a>
            <a href="#projects" className="cursor-pointer">
              Contacto
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
