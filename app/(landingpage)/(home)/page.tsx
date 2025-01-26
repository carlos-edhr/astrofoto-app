"use client";
import React from "react";
import Hero from "./_components/hero";
import About from "./_components/about";
import Navbar from "./_components/navbar";
import Talleres from "./_components/nosotros";
// import Story from "./_components/itinerario";
import Inscripciones from "./_components/inscripciones";
import Footer from "./_components/footer";
import Itinerario from "./_components/nuevo-itinerario";

const LandingPage = () => {
  return (
    <main className="bg-black relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Talleres />

      {/* <Story /> */}
      <Itinerario />
      <Inscripciones />
      <Footer />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
    </main>
  );
};

export default LandingPage;
