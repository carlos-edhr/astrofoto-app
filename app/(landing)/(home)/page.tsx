"use client";
import Encryption from "./_components/main/parallax-video";
import Footer from "./_components/main/footer";
import Hero from "./_components/main/hero";
import Projects from "./_components/main/participantes";
import AcercaDe from "./_components/main/acerca-de";
import ParallaxVideo from "./_components/main/parallax-video";
import Participantes from "./_components/main/participantes";
import { useEffect, useState } from "react";
import MarqueeGaleria from "./_components/main/sponsors";

type Props = {
  activeItem: number;
};

const LandingPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <main className="h-full w-full">
      <div className="z-50 flex flex-col  gap-5">
        <Hero />
        <MarqueeGaleria />
        <AcercaDe />
        <ParallaxVideo />
        <Participantes />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
