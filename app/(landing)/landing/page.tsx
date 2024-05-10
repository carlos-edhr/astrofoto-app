import Encryption from "./_components/main/Encryption";
import Footer from "./_components/main/footer";
import Hero from "./_components/main/hero";
import Projects from "./_components/main/projects";
import Skills from "./_components/main/Skills";

const LandingPage = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;
