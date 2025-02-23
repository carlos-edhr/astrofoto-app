import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative w-52 h-52 mx-auto">
        <Image
          src="/brand/CIAF8-Logo8.png"
          alt="Congress Logo"
          layout="fill"
          className="object-contain"
          priority
        />
      </div>
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔐 Congreso de Astrofotografía
      </h1> */}
      <p className="text-muted-foreground text-sm ">{label}</p>
    </div>
  );
};
