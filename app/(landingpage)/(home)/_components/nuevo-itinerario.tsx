import { FC } from "react";
import Image from "next/image";
import StarBackground from "@/app/(landing)/(home)/_components/main/StarBackground";
import StarsCanvas from "./landing-star-background";

const Itinerario: FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#062945] via-[#030916] to-[#020814] ">
      {/* Optional: You could add a dark overlay if needed, e.g.: */}
      {/* <div className="absolute inset-0 bg-[#181818] bg-opacity-20" /> */}

      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16">
        <div
          className="absolute inset-0 bg-gradient-radial from-orange-500/40 via-orange-500/20 to-transparent rounded-full filter blur-3xl"
          style={{
            width: "650px",
            height: "650px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
            opacity: 0.6,
          }}
        ></div>
        {/* Top row: headings + small collage  */}
        <div className="relative flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="special-font section-heading   text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
              Itinerario
            </h1>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex flex-wrap justify-end gap-4">
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/CIAF7-D3-T2 Brandon.jpg"
                alt="Nepal Girls"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/CIAF7-D3-T3 Juan.jpg"
                alt="Yak"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/CIAF7-D3-T4 Yuri.jpg"
                alt="Mountains"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* 
          2) Wrap your middle-row content in a “glass” card container.
             The key styles are:
               - bg-white/10 (or any semi‐transparent color)
               - backdrop-blur-md 
               - border border-white/10
               - rounded, shadow
               - text coloring to ensure readability
        */}
        {/* PLACE GLASS CARD HERE --START HERE -- */}
        <div
          className="
            mt-10 
            p-6 
            rounded-xl 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-white/20 
            shadow-lg 
            text-slate-200
            z-50
          "
        >
          <StarsCanvas />
          <div className="flex flex-col md:flex-row">
            {/* Left side: article list */}
            <div className="md:w-1/2 space-y-6">
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
            </div>

            {/* Right side: main portrait/poster + author label */}
            <div className="relative md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <div className="w-[250px] md:w-[350px] h-auto">
                <Image
                  src="/2024-CIAF7_Invitados.jpg"
                  alt="Invitados Poster"
                  width={350}
                  height={400}
                  className="object-cover rounded"
                />
              </div>
              <div className="mt-2 text-slate-200">
                <p className="font-semibold">CONGRESO INTERNACIONAL</p>
                <p className="text-sm">de ASTROFOTOGRAFÍA</p>
              </div>
            </div>
          </div>
        </div>
        {/* PLACE GLASS CARD HERE --END HERE -- */}

        {/* Bottom grid collage */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative w-full h-64">
            <Image
              src="/CIAF7-D1-01 Roberto.jpg"
              alt="Example 1"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/CIAF7-D1-02 Antoni.jpg"
              alt="Example 2"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/CIAF7-D1-04 Daniela.jpg"
              alt="Example 3"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        {/* PLACE GLASS CARD HERE --START HERE -- */}
        <div
          className="
            mt-10 
            p-6 
            rounded-xl 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-white/20 
            shadow-lg 
            text-slate-200
          "
        >
          <StarsCanvas />
          <div className="flex flex-col md:flex-row">
            {/* Left side: main portrait/poster + author label */}
            <div className="relative md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <div className="w-[250px] md:w-[350px] h-auto">
                <Image
                  src="/2024-CIAF7_Invitados.jpg"
                  alt="Invitados Poster"
                  width={350}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-slate-200">
                <p className="font-semibold">CONGRESO INTERNACIONAL</p>
                <p className="text-sm">de ASTROFOTOGRAFÍA</p>
              </div>
            </div>

            {/* Right side: article list */}
            <div className="md:w-1/2 space-y-6">
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
              <ArticleItem
                date="06.03.25"
                title="EL IMPACTO DE LA ASTROFOTOGRAFÍA EN LA INVESTIGACIÓN"
              />
            </div>
          </div>
        </div>
        {/* PLACE GLASS CARD HERE --END HERE -- */}
      </div>

      {/* <div
        className="
          absolute
          inset-0
          m-auto
          p-6 
          rounded-xl 
          
          z-10
          flex
          items-center
          justify-center
        "
        style={{
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        <StarBackground />
      </div> */}
    </section>
  );
};

export default Itinerario;

// Reusable small component for date + title
interface ArticleItemProps {
  date: string;
  title: string;
}
const ArticleItem: FC<ArticleItemProps> = ({ date, title }) => (
  <div className="border-b border-gray-200 pb-2">
    <p className="text-slate-500 text-muted-foreground font-semibold text-sm">
      {date}
    </p>
    <h3 className="text-slate-300 font-bold text-lg leading-tight mt-1">
      {title}
    </h3>
  </div>
);
