import React from "react";
import MarQuee from "react-fast-marquee";
type Props = {};
import Image from "next/image";
const rowOneImages = [
  {
    url: "/logos/LogoNatGeo REVISTA W.png",
  },
  {
    url: "/logos/IFN Logo General2.png",
  },
  {
    url: "/logos/SDM logo circular v2 blanco.png",
  },
  {
    url: "/logos/Logos Canon-02.png",
  },
  {
    url: "/logos/CL Logo Black2.png",
  },
  {
    url: "/logos/Logo Sazón.png",
  },
  {
    url: "/logos/Logo PhotoPills W.png",
  },
  {
    url: "/logos/Logo CETYS1.png",
  },
  {
    url: "/logos/Logo Brandon.png",
  },
  {
    url: "/logos/Logo Caliente4.png",
  },
  {
    url: "/logos/Logo Andromeda1.png",
  },
];

const rowTwoImages = [
  {
    url: "/logos/CL Logo Black2.png",
  },
  {
    url: "/logos/MTP LOGO VECTOR W.png",
  },
  {
    url: "/logos/Logo ValeyStudio W.png",
  },
  {
    url: "/logos/Logo Optolong2.png",
  },
  {
    url: "/logos/Logo Las Rocas.png",
  },
  {
    url: "/logos/Logo Fuego Santo W.png",
  },
  {
    url: "/logos/Logo Cruz.png",
  },
  {
    url: "/logos/Logo Brandon.png",
  },
  {
    url: "/logos/IFN Logo General2.png",
  },
];
function MarqueeGaleria({}: Props) {
  return (
    <div className="w-[100vw] mt-20 sm:mt-5 relative">
      <div className=" ">
        <MarQuee>
          {rowOneImages.map((i, index) => (
            <Image
              src={i.url}
              key={index}
              alt=""
              className="h-[100px] w-[100px] md:m-4  m-2 md:w-[200px] rounded-[20px]"
              width={500}
              height={300}
            />
          ))}
        </MarQuee>
        <MarQuee direction="right">
          {rowTwoImages.map((i, index) => (
            <Image
              src={i.url}
              key={index}
              alt=""
              className=" h-[100px] w-[100px]  md:m-4 m-2 md:w-[200px] rounded-[20px]"
              width={500}
              height={300}
            />
          ))}
        </MarQuee>
      </div>
    </div>
  );
}

export default MarqueeGaleria;
