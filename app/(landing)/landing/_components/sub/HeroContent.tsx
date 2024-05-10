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
      className="flex flex-row items-center justify-center px-20 mt-40 mb-40 w-full h-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[17px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] bg-gradient-to-r from-sky-200 to-sky-600 animatedgradient">
            Congreso de Astrofotografía
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Congreso{" "}
            <span className="font-['Maitree'] mb-4 text-4xl font-bold leading-none tracking-tight  md:text-5xl lg:text-6xl xt-wdark:tehite bg-gradient-to-l pt-5 md:mt-5 from-pink-700 via-rose-500 to-red-400 text-transparent bg-clip-text bg-300% animate-gradient">
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          El congreso Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Repudiandae a optio iure cumque quibusdam maxime odit deleniti iusto
          hic.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more!
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
