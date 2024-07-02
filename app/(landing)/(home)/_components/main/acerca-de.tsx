import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import { SkillDataProvider } from "../sub/skills-data-provider";
import SkillText from "../sub/SkillText";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const AcercaDe = () => {
  return (
    <section
      id="acerca-de"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-8 py-5"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="mx-auto max-w-screen-lg">
        <Image
          width={800}
          height={800}
          src={"/congreso-1.jpg"}
          alt="Congreso"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />

        <div className="my-4 font-black text-4xl !leading-snug">
          Acerca del congreso Internacional de{" "}
          <span className=" leading-none tracking-tight  md:text-5xl lg:text-6xl xt-wdark:tehite bg-gradient-to-l pt-5 md:mt-5 from-sky-200 to-sky-600 text-transparent bg-clip-text bg-300% animate-gradient">
            Astrofotografía{" "}
          </span>
        </div>
        <div className="font-normal !text-white text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          odio? Sequi quaerat asperiores debitis voluptatem natus suscipit
          mollitia facere perferendis dolores nobis laborum repellendus tempora,
          repudiandae nesciunt molestias delectus accusamus!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          odio? Sequi quaerat asperiores debitis voluptatem natus suscipit
          mollitia facere perferendis dolores nobis laborum repellendus tempora,
          repudiandae nesciunt molestias delectus accusamus!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          odio? Sequi quaerat asperiores debitis voluptatem natus suscipit
          mollitia facere perferendis dolores nobis laborum repellendus tempora,
          repudiandae nesciunt molestias delectus accusamus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sapiente, odio? Sequi quaerat
          asperiores debitis voluptatem natus suscipit mollitia facere
          perferendis dolores nobis laborum repellendus tempora, repudiandae
          nesciunt molestias delectus accusamus!
        </div>
      </div>
      {/* <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center jusitfy-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          ></video>
        </div>
      </div> */}
    </section>
  );
};

export default AcercaDe;
