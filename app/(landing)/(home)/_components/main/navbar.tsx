import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { currentUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

import { UserButton } from "@/components/auth/user-button";
import { SignInButton } from "@/components/auth/sign-in-button";

export const NavBar = async () => {
  const user = await currentUser();
  return (
    <div className="mb-12 z-50 w-full h-[65px] pt-3 fixed top-1 shadow-lg shadow-[@2A0E61]/50  bg-[#03001417] backdrop-blur-md  px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between  px-[10px]">
        <a
          href="#acerca-de"
          className=" flex flex-row items-center w-max h-max"
        >
          <Image
            src="/CIAF7 Logo-35.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer h-45 w-45 "
          />

          <p className="hidden md:block ml-[10px] text-2xl font-semibold w-max">
            Congreso de
          </p>
          <span className=" ml-[10px] text-2xl hidden sm:block font-semibold   text-primaryLanding">
            Astrofotografía
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="hidden xl:flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#acerca-de" className="cursor-pointer">
              Acerca del congreso
            </a>
            <a href="#conferencias" className="cursor-pointer">
              Conferencias
            </a>
            <a href="#galeria" className="cursor-pointer">
              Galería
            </a>
            <a href="#contacto" className="cursor-pointer">
              Contacto
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 ">
          <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
              <SignInButton>
                <Button size="sm" variant="outline">
                  Login
                </Button>
              </SignInButton>
            )}
          </div>
          <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
              <SignInButton>
                <Button size="sm" variant="primary">
                  Crear cuenta
                </Button>
              </SignInButton>
            )}
          </div>
          {!!user && (
            <div className="flex items-center gap-x-4 ">
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-primary"
                asChild
              >
                <Link href={`/u/${user.username}`}>
                  <Clapperboard className="h-5 w-5 lg:mr-2" />
                  <span className="hidden lg:block">Transmisiones</span>
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
      {/* for mobile screen */}
      {/* <div className="z-50 w-full md:hidden flex items-center justify-between">
        <div>
          <div className="flex  items-center justify-center">
            <Image
              src="/CIAF7 Logo-35.png"
              alt="logo"
              width={75}
              height={75}
              className="cursor-pointer hover:animate-slowspin"
            />
            <div>
              <h1 className="z-50 font-Inter text-3xl cursor-pointer">
                <span className="text-primaryLanding">Astrofotografía</span>
              </h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
