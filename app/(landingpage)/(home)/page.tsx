"use client";
import React from "react";
import Hero from "./_components/hero";
import About from "./_components/about";
import Navbar from "./_components/navbar";
import Features from "./_components/nosotros";
import Story from "./_components/itinerario";
import Contact from "./_components/inscripciones";
import Footer from "./_components/footer";

const LandingPage = () => {
  return (
    <main className="bg-blue-50 relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
    </main>
  );
};

export default LandingPage;
