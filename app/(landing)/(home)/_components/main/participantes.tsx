import React from "react";
import ProjectCard from "../sub/project-card";

const Participantes = () => {
  return (
    <div
      id="conferencistas"
      className="z-40 flex flex-col items-center justify-center mt-[-5] "
    >
      <div className="mb-10 font-black text-4xl !leading-snug bg-gradient-to-l pt-5 md:mt-5 from-sky-200 to-sky-600 text-transparent bg-clip-text bg-300% animate-gradient">
        Conferencistas
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CIAF7-D1-01 Roberto.jpg"
          title="Roberto Aparicio"
          description="El impacto de la Astrofotografía en la Divulgación."
        />
        <ProjectCard
          src="/CIAF7-D1-02 Antoni.jpg"
          title="Antoni Cladera"
          description="Cómo planificar tus fotografías de Vía Láctea, rastros de estrellas, lluvias de meteoros y eclipses con Photopills."
        />
        <ProjectCard
          src="/CIAF7-D1-03 José.jpg"
          title="José Luis Terrones"
          description="Modificando equipo para Astrofotografía."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CIAF7-D1-04 Daniela.jpg"
          title="Daniela Botero"
          description="Capturando el Cosmos: Celebrando a las mujeres en la Astrofotografía."
        />
        <ProjectCard
          src="/CIAF7-D1-05 Brandon.jpg"
          title="Brandon Echeverrys"
          description="Cazando eclipses de Sol."
        />
        <ProjectCard
          src="/CIAF7-D2-06 Rogelio.jpg"
          title="Rogelio Bernal"
          description="La Ciencia y el Arte de la Astrofotografía. Pasado, presente y futuro."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CIAF7-D2-07 Juan.jpg"
          title="Juan Paulo González"
          description="Astrofotografía urbana desde Bortle 9."
        />
        <ProjectCard
          src="/CIAF7-D2-08 Leonor.jpg"
          title="Leonor Ana Hernandez"
          description="El arte de ver el cielo a través de los registros."
        />
        <ProjectCard
          src="/CIAF7-D2-09 Braulio.jpg"
          title="Braulio Guerra"
          description="El neo derecho espacial y la actividad humana frente al cosmos."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CIAF7-D2-10 Yuri.jpg"
          title="Yuri Beletsky"
          description="Los colores del cielo nocturno."
        />
        <ProjectCard
          src="/CIAF7-D3-T1 Vicent.jpg"
          title="Vicent Peris"
          description="Técnicas de corrección de gradientes en Pixinsight."
        />
        <ProjectCard
          src="/CIAF7-D3-T2 Brandon.jpg"
          title="Brandon Echevarrys"
          description="Startrails y Timelapses."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CIAF7-D3-T3 Juan.jpg"
          title="Juan Paulo González"
          description="Sho/Hubble palette fácil y rápido en pixinsight"
        />
        <ProjectCard
          src="/CIAF7-D3-T4 Yuri.jpg"
          title="Yuri Beletsky"
          description="Revelado de Astrofotografía de campo amplio."
        />
        {/* <ProjectCard
          src="2024-CIAF7_Invitados.jpg"
          title="Brandon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
    </div>
  );
};

export default Participantes;
