import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4", font.className)}>
      <div className=" my-2 rounded-full p-1">
        <Image
          src="/CIAF7 Logo-33.png"
          alt="astrofoto"
          height="400"
          width="350"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Congreso de Astrofotografía</p>
        <p className="text-sm text-muted-foreground">
          Bienvenidos al Congreso Internacional de Astrofotografía
        </p>
      </div>
    </div>
  );
};
