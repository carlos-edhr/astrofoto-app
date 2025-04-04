import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";
Loader2Icon;

export const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      {/* <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      /> */}
      <Loader2Icon className="h-24 w-24" />
    </div>
  );
};
