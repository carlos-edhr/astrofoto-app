"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PlanProps {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  color: "gray" | "blue" | "yellow";
  number: string;
}

export const Planes: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.2,
        ease: "power1.out",
      });

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const plans: PlanProps[] = [
    {
      id: "MAIN_STAGE",
      title: "MAIN STAGE",
      subtitle:
        "Acceso a dos días de conferencias en modalidad híbrida. Aprende de expertos en distintos temas del mundo de la Astrofotografía.",
      features: [
        "Acceso completo a conferencias",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF IX",
      ],
      buttonText: "$1,200.00 MXN",
      color: "gray",
      number: "01",
    },
    {
      id: "STARGAZER",
      title: "STARGAZER",
      subtitle:
        "Dos noches de campamento en la Sierra de Juárez en un Bortle 2. Astrofotografía y conversaciones con expertos en la materia.",
      features: [
        "Transporte redondo desde Tijuana",
        "Alimentación dentro del rancho",
        "Acceso al rancho",
        "Charla especial de Astrofotografía",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF IX",
      ],
      buttonText: "$6,000.00 MXN",
      color: "blue",
      number: "02",
    },
    {
      id: "FULL_ACCESS",
      title: "FULL-ACCESS",
      subtitle:
        "La experiencia completa del Congreso. Accede a dos días de conferencias y dos noches de campamento astrofotográfico en un Bortle 2.",
      features: [
        "Acceso a todas las conferencias",
        "Campamento con transporte y comida",
        "Charla de Astrofotografía",
        "Constancia de asistencia",
        "Kit de bienvenida con playera oficial CIAF IX",
      ],
      buttonText: "$7,000.00 MXN",
      color: "yellow",
      number: "03",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "gray":
        return {
          accentColor: "text-gray-400",
          border: "border-white",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-gray-600 hover:bg-gray-500",
          underline: "bg-gray-400",
          iconBg: "bg-gray-700",
          checkmarkColor: "text-blue-500",
        };
      case "yellow":
        return {
          accentColor: "text-yellow-500",
          border: "border-white",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-yellow-600 hover:bg-yellow-500",
          underline: "bg-yellow-500",
          iconBg: "bg-yellow-700",
          checkmarkColor: "text-yellow-500",
        };
      case "blue":
        return {
          accentColor: "text-blue-400",
          border: "border-white",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-blue-600 hover:bg-blue-500",
          underline: "bg-blue-400",
          iconBg: "bg-blue-700",
          checkmarkColor: "text-blue-400",
        };
      default:
        return {
          border: "border-white",
          title: "text-white",
          feature: "text-white",
          buttonBg: "bg-blue-500 hover:bg-blue-400",
          underline: "bg-blue-500",
          iconBg: "bg-blue-700",
          checkmarkColor: "text-blue-500",
        };
    }
  };

  const getPlanIcon = (number: string) => {
    switch (number) {
      case "01":
        return "/brand/Logo_CIAF 9 FIRMA2.png";
      case "02":
        return "/brand/Logo_CIAF 9 FIRMA4.png";
      case "03":
        return "/brand/Logo_CIAF 9 FIRMA.png";
      default:
        return "/icons/default-icon.png";
    }
  };

  return (
    <div
      id="planes"
      ref={containerRef}
      className="
        relative
        w-full
        max-w-[1280px]
        mx-auto
        flex
        flex-col
        items-center
        overflow-hidden
        text-white
        p-6
        md:p-10
        mt-8
        bg-[#191919]
        rounded-lg
        font-robotoCondensed
      "
    >
      <h2
        className="
        text-3xl
        md:text-4xl
        font-bold
        text-center
        mb-12
        uppercase
        tracking-wider
        text-white
        font-robotoCondensed
      "
      >
        INSCRIPCIONES
      </h2>

      <div
        className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        mt-4
      "
      >
        {plans.map((plan, index) => {
          const colorClasses = getColorClasses(plan.color);

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Plan Icon - Outside the card at the top */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-24 h-24 rounded-full  flex items-center justify-center border-2 border-white`}
                >
                  <img
                    src={getPlanIcon(plan.number)}
                    alt={`${plan.title} icon`}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`
                  relative
                  flex
                  flex-col
                  rounded-xl
                  p-6
                  border-2
                  ${colorClasses.border}
                  bg-[#1a1a1a]
                  transition-all
                  overflow-hidden
                  min-h-[500px]
                  w-full
                  hover:shadow-2xl
                `}
              >
                {/* Plan Title with PASS in the same line */}
                <h3
                  className={`
                    text-2xl
                    font-bold
                    uppercase
                    tracking-wide
                    mb-3
                    text-center
                    ${colorClasses.title}
                  `}
                >
                  {plan.title}{" "}
                  <span className={colorClasses.accentColor}>PASS</span>
                </h3>

                {/* Colored underline bar */}
                <div
                  className={`w-28  h-1 mx-auto mb-6 ${colorClasses.underline}`}
                ></div>

                {/* Plan Subtitle */}
                <p
                  className={`
                    text-sm
                    mb-6
                    leading-relaxed
                    text-gray-300
                    text-center
                  `}
                >
                  {plan.subtitle}
                </p>

                {/* Features */}
                <ul
                  className="
                    space-y-3
                    mb-8
                    flex-1
                  "
                >
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="
                        text-sm
                        flex
                        items-start
                        text-gray-200
                      "
                    >
                      <span
                        className={`mr-3 mt-1 flex-shrink-0 ${colorClasses.checkmarkColor} text-lg`}
                      >
                        {plan.number === "02" ? "•" : "✓"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Discount Note for Stargazer */}
                {plan.number === "02" && (
                  <p className="text-xs text-center text-gray-400 mb-4 italic">
                    Descuento proporcional si vas en transporte propio.
                  </p>
                )}

                {/* Button with Price */}
                <Link
                  href="http://wa.me/526647200826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full"
                >
                  <Button
                    className={`
                      w-full
                      py-3
                      text-lg
                      font-bold
                      uppercase
                      tracking-wider
                      ${colorClasses.buttonBg}
                      text-white
                      border-none
                      rounded-lg
                      transition-colors
                    `}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
