"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GlobeIcon,
  Link,
} from "lucide-react";
import { WEBPACK_LAYERS } from "next/dist/lib/constants";

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
    <section className="relative w-full mt-16  text-slate-200 py-16 rounded-2xl bg-gradient-to-br from-[#1c1c1c]  to-[#000000]  ">
      {/* <div className="w-full bg-[url('/congreso-1.jpg')] bg-cover bg-no-repeat bg-center rounded-2xl opacity-40 z-10"/>  */}

      <div className="container mx-auto flex flex-col items-start gap-8 px-4 md:flex-row md:px-8 z-30">
        {/* Left Side: Founder Portrait */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 rounded-2xl">
          <Image
            src={founderImageUrl}
            alt={founderName}
            width={800}
            height={800}
            className="max-h-fit w-full  rounded-2xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex w-full flex-col justify-center items-center md:w-1/2">
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl">
            {heading}
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">{description}</p>
          <div className="mt-16 flex flex-row justify-center items-center gap-4">
            <a href="https://www.caneckleyva.com/" target="_blank">
              <GlobeIcon className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.facebook.com/kane.leyva" target="_blank">
              <FacebookIcon className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.instagram.com/kaneleyva/" target="_blank">
              <InstagramIcon className="w-6 h-6 text-white" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/caneckleyva" target="_blank">
              <LinkedinIcon className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center align-middle mt-16 w-full md:w-1/2  overflow-hidden aspect-auto mx-auto rounded-2xl">
            <a href="https://www.caneckleyva.com/" target="_blank">
             
      </div> */}
      </div>
    </section>
  );
}
