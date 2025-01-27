"use client"; // Only if you're using the Next.js App Router. Remove if using Pages Router.

import React from "react";
// The Accordion, AccordionItem, etc. come from shadcn/ui
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
// ^ Adjust import based on your project structure

// Example FAQ data
const faqs = [
  {
    question: "¿Qué es la plataforma del Congreso de Astrofotografía?",
    answer:
      "Es una plataforma en línea diseñada para transmitir en vivo las actividades del Congreso de Astrofotografía, así como para ofrecer talleres, prácticas experimentales en campo, y acceso a herramientas de videoconferencia y streaming. Está dirigida a entusiastas y profesionales interesados en capturar imágenes del espacio exterior.",
  },
  {
    question: "¿Qué incluye el plan gratuito?",
    answer:
      "El plan gratuito ofrece: 1) Acceso a las transmisiones en vivo de las principales sesiones del congreso. 2) Inscripción a talleres gratuitos (sujeto a disponibilidad). 3)  Acceso limitado a contenido grabado posterior al congreso.",
  },
  {
    question: "¿Qué beneficios tiene el plan premium?",
    answer:
      "El plan premium incluye: 1) Acceso completo a todas las transmisiones en vivo, incluidos eventos exclusivos. 2) Prioridad para registrarse en talleres presenciales y experimentales. 3) Acceso a todos los contenidos grabados y recursos educativos. 4) Descuentos exclusivos en talleres con costo.",
  },
  {
    question: "¿Cómo funcionan los talleres individuales?",
    answer:
      "Los talleres individuales son cursos específicos que puedes inscribirte directamente desde la plataforma. Estos pueden ser gratuitos o con un costo, dependiendo del contenido y los materiales necesarios. Podrás encontrar una descripción detallada de cada taller, incluyendo requisitos y precios, en la sección Talleres(dentro de la plataforma).",
  },
  {
    question: "¿Qué son las prácticas experimentales en campo?",
    answer:
      "Son actividades presenciales diseñadas para aplicar técnicas de astrofotografía en un entorno real, con la guía de expertos. Estas prácticas incluyen el uso de telescopios y cámaras especializadas para fotografiar objetos celestes. Algunos eventos pueden tener un costo adicional para cubrir materiales y equipo.",
  },
  {
    question:
      "¿Qué herramientas de streaming y videoconferencias ofrece la plataforma?",
    answer:
      "La plataforma proporciona: 1) Streaming de alta calidad para las sesiones en vivo del congreso. 2) Acceso a videoconferencias interactivas durante talleres y charlas. 3) Grabación y acceso posterior a las transmisiones en vivo para usuarios premium.",
  },
  {
    question: "¿Cómo me registro en la plataforma?",
    answer:
      "Puedes registrarte creando una cuenta gratuita o seleccionando el plan premium en nuestra página de inicio. Solo necesitas un correo electrónico y una contraseña para comenzar.",
  },
  {
    question: "¿Puedo cambiar mi plan de gratuito a premium?",
    answer:
      "Sí, puedes actualizar tu cuenta al plan premium en cualquier momento desde tu perfil de usuario. Una vez actualizado, obtendrás acceso inmediato a los beneficios premium.",
  },
  {
    question: "Dónde se realizarán los talleres y prácticas presenciales?",
    answer:
      "Los talleres y prácticas se realizarán en diferentes ubicaciones seleccionadas por su idoneidad para la observación astronómica. Podrás ver las fechas y ubicaciones en la sección de -Próximos eventos- dentro de la plataforma.",
  },
];

const PreguntasFrecuentes: React.FC = () => {
  return (
    <section
      className="
        relative
        text-white
        py-16
        px-4
        sm:px-8
        overflow-hidden
        bg-[#0B1120] /* Base dark background */
      "
    >
      {/* 1) First gradient overlay (radial) */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(ellipse_at_center,_#0D1A2C_0%,_transparent_70%)]
          md:bg-[radial-gradient(circle_at_40%_30%,_rgba(13,26,44,0.9),_transparent_70%)]
        "
      />
      {/* 2) Second gradient overlay (linear) */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-br
          from-[#1E2A3A]/20
          to-[#17202B]/80
        "
      />

      {/* Main container above the gradients */}
      <div className="relative max-w-3xl mx-auto z-10">
        {/* Badge/Label */}
        <div className="inline-block border border-orange-500 text-orange-400 text-sm px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          faq
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Preguntas más <br className="sm:hidden" /> frecuentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={String(index)}
              className="border border-[#1B2A3A] rounded-lg bg-[#0D1A2C] overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-gray-200">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
