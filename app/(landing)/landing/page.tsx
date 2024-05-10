import Encryption from "./_components/main/parallax-video";
import Footer from "./_components/main/footer";
import Hero from "./_components/main/hero";
import Projects from "./_components/main/participantes";
import AcercaDe from "./_components/main/acerca-de";
import ParallaxVideo from "./_components/main/parallax-video";
import Participantes from "./_components/main/participantes";

const LandingPage = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-5">
        <Hero />
        <AcercaDe />
        <ParallaxVideo />
        <Participantes />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
