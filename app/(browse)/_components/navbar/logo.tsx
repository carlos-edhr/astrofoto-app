import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className=" p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/CIAF7 Logo-35.png"
            alt="Astrofoto-logo"
            height="150"
            width="100"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold ">Astrofotografía</p>
          <p className="text-xs text-muted-foreground text-primaryLanding">
            Congreso Internacional de Astrofotografía
          </p>
        </div>
      </div>
    </Link>
  );
};
