// page.tsx
import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react"; // Install lucide-react
import DashboardFooter from "../_components/dashboard-footer";
import { MeetingTypeList } from "./_components/meeting-type-list";
import { format } from "date-fns";
import { Play } from "lucide-react";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
const conferences = [
  {
    title:
      "Cómo Iniciarte en la Astrofotografía en 2025: Guía para Principiantes",
    excerpt:
      "¿Alguna vez has mirado al cielo nocturno y deseado capturar su belleza? La astrofotografía puede parecer intimidante al principio, pero con los conocimientos básicos y el equipo adecuado, cualquiera puede empezar. En este artículo, exploraremos los conceptos esenciales, desde cámaras y trípodes hasta técnicas de exposición, para que des tus primeros pasos en este fascinante hobby.",
    category: "Astrofotografía",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Acceso libre",
  },
  {
    title: "Los Mejores Telescopios para Astronomía Amateur en 2023",
    excerpt:
      "Elegir tu primer telescopio puede ser abrumador con tantas opciones en el mercado. ¿Reflector o refractor? ¿Qué apertura es ideal para observar planetas o galaxias? Analizamos los modelos más recomendados este año, sus ventajas y cómo seleccionar el que se adapte a tus necesidades y presupuesto.",
    category: "Equipamiento",
    slug: "/posts/complive-dissonance",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Pago requerido",
  },
  {
    title: "Edición de Fotos Astronómicas: Herramientas y Técnicas Básicas",
    excerpt:
      "Capturar la imagen es solo la mitad del trabajo. La edición es clave para revelar detalles ocultos en tus fotografías del cosmos. Descubre programas como DeepSkyStacker o Photoshop, y aprende técnicas para ajustar brillo, contraste y reducir el ruido en tus tomas.",
    category: "Observación Celeste",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Pago requerido",
  },
  {
    title:
      "Los 5 Mejores Lugares para Observar las Estrellas en América Latina",
    excerpt:
      "La contaminación lumínica puede arruinar una noche de observación astronómica, pero en América Latina existen auténticos paraísos oscuros. Desde el desierto de Atacama hasta la Patagonia, te presentamos destinos donde el cielo despliega su majestuosidad con claridad incomparable.",
    category: "Maker Stories",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Pago requerido",
  },
  {
    title:
      "Los 5 Mejores Lugares para Observar las Estrellas en América Latina",
    excerpt:
      "La contaminación lumínica puede arruinar una noche de observación astronómica, pero en América Latina existen auténticos paraísos oscuros. Desde el desierto de Atacama hasta la Patagonia, te presentamos destinos donde el cielo despliega su majestuosidad con claridad incomparable.",
    category: "Maker Stories",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Acceso libre",
  },
  {
    title: "Cómo Fotografiar la Luna con una Cámara Reflex: Paso a Paso",
    excerpt:
      "La Luna es el objeto celeste más accesible para practicar astrofotografía. Con una cámara réflex, un trípode y algunos ajustes manuales, podrás capturar cráteres y mares lunares en detalle. Aquí te guiamos en la configuración de ISO, velocidad de obturación y enfoque perfecto.",
    category: "Astrofotografía",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Acceso libre",
  },
  {
    title:
      "Eventos Astronómicos Imperdibles: Lluvias de Estrellas y Eclipses 2023",
    excerpt:
      "El 2023 trae consigo espectáculos celestes únicos, desde las Perseidas hasta un eclipse solar anular. Te contamos fechas, horarios y consejos para disfrutar de estos fenómenos, ya sea con prismáticos, telescopio o simplemente tus ojos.",
    category: "Eventos Astronómicos",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Pago requerido",
  },
  {
    title: "Astrofotografía con DSLR vs. Cámaras Especializadas: ¿Cuál Elegir?",
    excerpt:
      "¿Vale la pena invertir en una cámara astronómica modificada o es suficiente una DSLR común? Comparamos ventajas y desventajas de ambos equipos, incluyendo sensibilidad al hidrógeno alfa, costo y versatilidad, para ayudarte a decidir.",
    category: "Equipamiento",
    slug: "/posts/achie-lauren",
    author: {
      name: "John Doe",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
    duration: "15:30",
    acceso: "Acceso libre",
  },
];

const ConferenciasPage = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/auth/login");
  }
  const isAdmin = user.role === "ADMIN";
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now,
  );
  return (
    <div className="h-full  px-4 md:px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Conferencias"}
        subtitle={
          "Aquí encontrarás las conferencias del Congreso Internacional de Astrofotografía."
        }
      />

      {/* Product Grid Section */}
      {isAdmin && (
        <section className="flex flex-col gap-10 dark:text-white">
          <h1 className="text-3xl font-robotoCondensed font-bold ">
            Opciones del Administrador
          </h1>
          {/* <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-[270px] rounded-md py-2 text-center text-base font-normal">
              Conference room
            </h2>
            <section className="flex size-full flex-col gap-10 text-white">
              <h1 className="text-3xl font-bold">Home - Conferencias</h1>
            </section>
          </div>
        </div> */}
          <MeetingTypeList />
        </section>
      )}

      <Separator className="my-8" />
      <h1 className="text-3xl font-robotoCondensed font-bold ">Conferencias</h1>
      <section className="container mx-auto px-4 py-6 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {conferences.map((conference) => (
            <div key={conference.slug} className="group">
              {/* Video Thumbnail Container */}
              <Link href={conference.slug} className="block relative">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/CIAF7-D1-01 Roberto.jpg"
                    alt={conference.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  />
                  {/* Video Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-xs">
                    {conference.duration}
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white fill-current" />
                  </div>
                </div>
              </Link>

              {/* Video Info Section */}
              <div className="flex gap-3 mt-3">
                {/* Channel Avatar */}
                <Link href="#" className="shrink-0">
                  <Image
                    src={conference.author.avatar}
                    alt={conference.author.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </Link>

                {/* Video Metadata */}
                <div className="flex-1">
                  <Link href={conference.slug}>
                    <h3 className="font-semibold line-clamp-2 text-base mb-1">
                      {conference.title}
                    </h3>
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-primary">
                      {conference.author.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span>{conference.acceso}</span>
                      <span>•</span>
                      <span>
                        {format(new Date(conference.date), "MMM dd, yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />
      <DashboardFooter />
    </div>
  );
};

export default ConferenciasPage;
