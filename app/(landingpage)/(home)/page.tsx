"use client";
import React from "react";
import Hero from "./_components/old-hero";
import About from "./_components/about";
import Navbar from "./_components/navbar";

import Footer from "./_components/footer";

import NewHero from "./_components/new-hero";
import StarsCanvas from "./_components/landing-star-background";
import { Fundadores } from "./_components/fundadores";
import { Invitacion } from "./_components/invitacion";
import { Invitacion2 } from "./_components/invitacion2";

import { Planes } from "./_components/precios";
import { Fechas } from "./_components/fechas";
import { Galeria } from "./_components/galeria-new";

const LandingPage = () => {
  return (
    <main className="bg-blackBackgroundNew z-10 relative min-h-screen w-screen  ">
      {/* <StarsCanvas /> */}
      <Navbar />

      <NewHero />

      <Invitacion />
      <Fechas />
      <Planes />
      <Galeria />
      <Fundadores />
      {/* <Invitacion2 /> */}

      {/* <PreguntasFrecuentes /> */}
      <Footer />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
    </main>
  );
};

export default LandingPage;
