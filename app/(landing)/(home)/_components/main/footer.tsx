import React from "react";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { Heart } from "lucide-react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      {/* start video footer */}
      <div className="relative flex flex-col h-screen w-screen">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-50px] left-0 z-[1] w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      {/* end video */}
      <div className="w-full flex  flex-col  items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Acerca de nosotros</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Registrate</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Nuestra misión</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">nuestro@correo.com</span>
            </p>
          </div>
        </div>

        <div className="z-40 mb-[20px] text-[15px] text-center">
          &copy; Congreso de Atrofotografía 2024.
        </div>
        <div className="flex z-40 mb-[20px] text-[15px] text-center justify-center align-center">
          <p>
            Developed by{" "}
            <Link target="_blank" href="https://www.carlos-ehr.com/">
              <span className="text-primaryLanding">carlos-ehr</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
