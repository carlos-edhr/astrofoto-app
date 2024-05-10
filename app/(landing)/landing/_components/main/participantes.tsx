import React from "react";
import ProjectCard from "../sub/project-card";

const Participantes = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[-5] ">
      <div className="mb-10 font-black text-4xl !leading-snug bg-gradient-to-l pt-5 md:mt-5 from-sky-200 to-sky-600 text-transparent bg-clip-text bg-300% animate-gradient">
        Participantes
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/participante-1.jpg"
          title="Participante"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/participante-2.jpg"
          title="Participante"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/participante-3.jpg"
          title="Participante"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Participantes;
