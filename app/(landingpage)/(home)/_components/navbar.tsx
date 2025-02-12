"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["NOSOTROS", "FECHAS", "ITINERARIO", "BOLETOS", "PRODUCTOS"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Left logo */}
          <div className="flex items-center">
            <Image
              src="/brand/CIAF8-Estrella1.png"
              alt="Congress Logo"
              width={40}
              height={40}
              className="w-10 h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex flex-col ">
            <div className="hidden md:flex  items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  className="relative text-plata text-sm font-medium hover:text-white transition-colors
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                           hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <a
                className="text-amarillo relative text-sm font-medium hover:text-amarillo/80  transition-colors
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500
                         hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                LOG IN
              </a>
              <a
                className="text-amarillo relative text-sm font-medium hover:text-amarillo/80  transition-colors
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500
                         hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                SIGN UP
              </a>
            </div>
            <Separator className="mt-3" />
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-[#181818] py-4 px-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    className="relative text-plata text-sm font-medium hover:text-white transition-colors
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-azulAstro
                           hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
                <Separator className="my-1" />
                <a
                  className="text-amarillo relative text-sm font-medium hover:text-amarillo/80  transition-colors
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500
                         hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  LOG IN
                </a>
                <a
                  className="text-amarillo relative text-sm font-medium hover:text-amarillo/80  transition-colors
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500
                         hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  SIGN UP
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
