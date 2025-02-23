"use client";

import * as React from "react";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GlobeIcon,
} from "lucide-react";
import StarsCanvas from "./landing-star-background";

interface FoundersProps {
  heading: string;
  subheading?: string;
  founderImageUrl: string;
  founderName: string;
  description: string;
}

export function Fundadores({
  heading,
  subheading,
  founderImageUrl,
  founderName,
  description,
}: FoundersProps) {
  return (
    <section
      className="relative flex  w-full
    max-w-[980px] mt-16 text-slate-200 py-16 rounded-2xl  overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-[#000000] mx-auto"
    >
      <div className="container mx-auto flex flex-col items-start gap-8 px-4 md:flex-row md:px-8 z-30">
        {/* Left Side: Founder Portrait */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 rounded-2xl">
          <Image
            src={founderImageUrl}
            alt={founderName}
            width={800}
            height={800}
            className="max-h-fit w-full rounded-2xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex w-full flex-col justify-center h-full md:w-1/2 md:pl-8">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl">
              {heading}
              <div className="h-1 w-full bg-blue-500 mt-4 mb-6" />
            </h2>
            {/* <div className="h-1 w-full bg-blue-500 mt-4 mb-6" />{" "} */}
            {/* Added bar */}
            <p className="text-gray-200 leading-relaxed text-left max-w-2xl">
              {description}
            </p>
            <div className="mt-8 flex flex-row gap-4 items-center">
              <a
                className="flex"
                href="https://www.caneckleyva.com/"
                target="_blank"
              >
                <GlobeIcon className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.facebook.com/kane.leyva" target="_blank">
                <FacebookIcon className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/kaneleyva/" target="_blank">
                <InstagramIcon className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/caneckleyva" target="_blank">
                <LinkedinIcon className="w-6 h-6 text-white hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
