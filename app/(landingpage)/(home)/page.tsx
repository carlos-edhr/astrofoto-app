"use client";
import React from "react";
import Hero from "./_components/old-hero";
import About from "./_components/about";
import Navbar from "./_components/navbar";
import Talleres from "./_components/nosotros";

// import Story from "./_components/itinerario";
import Inscripciones from "./_components/inscripciones";
import Footer from "./_components/footer";
import Itinerario from "./_components/nuevo-itinerario";
import Gallery from "./_components/galeria";
import PreguntasFrecuentes from "./_components/preguntas-frecuentes";
import NewHero from "./_components/new-hero";
import StarsCanvas from "./_components/landing-star-background";
import { Fundadores } from "./_components/fundadores";
import { Invitacion } from "./_components/invitacion";

const LandingPage = () => {
  return (
    <main className="bg-blackSpace z-10 relative min-h-screen w-screen  ">
      {/* <StarsCanvas /> */}
      <Navbar />

      <NewHero />

      <Invitacion />
      <Fundadores />
      {/* <Hero /> */}
      {/* <About /> */}
      <Talleres />

      {/* <Story /> */}
      <Itinerario />
      <div className="bg-gradient-to-br from-[#020814]  via-[#030916] to-[#062945]">
        <Gallery
          title={""}
          images={[
            "CIAF7-D1-04 Daniela.jpg",
            "CIAF7-D2-06 Rogelio.jpg",
            "CIAF7-D2-07 Juan.jpg",
            "CIAF7-D2-09 Braulio.jpg",
            "CIAF7-D2-10 Yuri.jpg",
          ]}
        />
      </div>

      <Inscripciones />
      <PreguntasFrecuentes />
      <Footer />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
    </main>
  );
};

export default LandingPage;
