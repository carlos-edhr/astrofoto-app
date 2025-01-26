"use client";
import { ArrowBigRightDashIcon } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import StarsCanvas from "./landing-star-background";
import Spline from "@splinetool/react-spline";
import { Invitacion } from "./invitacion";

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
}

interface BentoTiltProps {
  className: string;
  children: ReactNode;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  interface CursorPosition {
    x: number;
    y: number;
  }

  interface MouseEvent {
    clientX: number;
    clientY: number;
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {/* {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
          
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <ArrowBigRightDashIcon className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

const Talleres = () => (
  <section
    id="nosotros"
    className="bg-black z-10 relative w-full min-h-[90vh]  my-16 pb-52 overflow-hidden"
  >
    {/* Our star background behind the features */}
    <StarsCanvas />
    <div className="container relative z-10 mx-auto px-3 md:px-10">
      <div className="flex flex-row items-center align-middle min-h-screen justify-center px-5 py-32 w-full  z-[20]">
        <div className="flex flex-col">
          <p className="special-font section-heading ">Nosotros</p>
          <p className="max-w-md  text-lg text-slate-200 opacity-80">
            El Congreso Internacional de{" "}
            <span className="text-primaryLanding">Astrofotografía</span> es un
            evento anual donde reunimos a varios fotógrafos, astrofotógrafos,
            astrónomos y divulgadores científicos de diferentes países con el
            objetivo de compartir a través de conferencias magistrales y de
            talleres que nos ayudan a crecer en esta bonita disciplina de
            capturar la luz del universo.
          </p>
        </div>

        <div className="hidden w-full h-full md:block  justify-center items-center">
          {/* SPLINE SCENE START */}
          {/* <Spline scene="https://prod.spline.design/0ABX-F8AcLXFZ2hI/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/EiDOgcOIiL5Z-SBm/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/SCTGujpbmLheztnm/scene.splinecode" />

          {/* SPLINE SCENE END */}
        </div>
      </div>

      <Invitacion videoSrc="public/videos/astrofoto-vid-2.mp4" />

      <div id="talleres">
        <BentoTilt className="border-hsla relative mt-16 mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/astrofoto-vid-5.mp4"
            title={<>Talleres</>}
            description=""
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/astrofoto-vid-2.mp4"
              title={<>Ciencia</>}
              description=""
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/astrofoto-vid-7.mp4"
              title={<>Divulgación</>}
              description=""
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/astrofoto-vid-4.mp4"
              title={<>Arte</>}
              description=""
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-full">
            <div className="flex size-full flex-col justify-between bg-primaryLanding p-5">
              <h1 className="bento-title  max-w-64  text-black">
                Regístrate y se parte de nuestra comunidad
              </h1>

              <ArrowBigRightDashIcon className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/astrofoto-vid-3.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Talleres;
