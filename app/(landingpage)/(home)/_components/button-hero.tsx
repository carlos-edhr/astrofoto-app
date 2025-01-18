"use client";
import clsx from "clsx";
import { ArrowBigDownDashIcon, LucideIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface ButtonHeroProps {
  id: string;
  title: string;
  rightIcon?: ReactNode | undefined;
  leftIcon?: ReactNode | undefined;
  containerClass: string;
}

const ButtonHero = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
}: ButtonHeroProps) => {
  return (
    <button
      id={id}
      className={clsx(
        `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass}`,
      )}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default ButtonHero;
