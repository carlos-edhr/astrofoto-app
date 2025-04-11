import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlusCircleIcon } from "lucide-react";
interface HomeCardProps {
  title: string;
  description: string;
  handleClick: () => void;
  icon?: React.ElementType;
}

export const HomeCard = ({
  icon,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer bg-gradient-to-b from-[#1c1c1c] to-[#000000]",
      )}
      onClick={handleClick}
    >
      <div className="flex-center size-12 ">
        {icon && React.createElement(icon)}
      </div>
      <div className="flex flex-col gap-2  text-white">
        <h1 className="text-2xl font-bold  ">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};
