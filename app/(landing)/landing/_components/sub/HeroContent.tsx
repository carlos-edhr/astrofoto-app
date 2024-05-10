"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Spline from "@splinetool/react-spline";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20   w-full h-full z-[20]"
    >
      <div className="h-full w-full pl-4 flex flex-col gap-5 justify-center m-auto text-start">
        {/*  <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[17px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] bg-gradient-to-r from-sky-200 to-sky-600 animatedgradient">
            Congreso de Astrofotografía
          </h1> 
        </motion.div>*/}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-9 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Congreso Internacional de{" "}
            <span className="font-['Maitree'] mb-4 text-4xl font-bold leading-none tracking-tight  md:text-5xl lg:text-6xl xt-wdark:tehite bg-gradient-to-l pt-5 md:mt-5 from-sky-200 to-sky-600 text-transparent bg-clip-text bg-300% animate-gradient">
              Astrofotografía{" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          a optio iure cumque quibusdam maxime odit deleniti iusto hic.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="flex flex-row items-center justify-center py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          ¡Regístrate!
        </motion.a>
      </div>
      <div className="hidden w-full h-full md:block  justify-center items-center">
        {/* SPLINE SCENE START */}
        {/* <Spline scene="https://prod.spline.design/0ABX-F8AcLXFZ2hI/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/EiDOgcOIiL5Z-SBm/scene.splinecode" />
        {/* SPLINE SCENE END */}
      </div>
    </motion.div>
  );
};

export default HeroContent;
