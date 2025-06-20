import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";

const HomePage = () => {
  const featuredPost = {
    title:
      "Únete al Congreso Internacional de Astrofotografía 2025: Pasión, Aprendizaje y Comunidad Global",
    excerpt:
      "¿Listo para sumergirte en el evento más inspirador del año para los amantes del cosmos? El Congreso Internacional de Astrofotografía 2025 reunirá a panelistas expertos de países como Chile, Japón, España y Australia, quienes compartirán técnicas innovadoras, avances tecnológicos y experiencias únicas. Del 10 al 13 de abril, en la vibrante ciudad de Barcelona, disfrutarás de conferencias magistrales, talleres prácticos con equipos de última generación y sesiones de networking con entusiastas y profesionales. ¡Reserva tus fechas y prepárate para vivir el cielo como nunca antes!",
    category: "Design Trends",
    slug: "/posts/2030-maya-louviere",
    author: {
      name: "Caneck Leyva",
      avatar: "/retratos/Caneck Square1.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
  };

  const posts = [
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
    },
    {
      title:
        "Astrofotografía con DSLR vs. Cámaras Especializadas: ¿Cuál Elegir?",
      excerpt:
        "¿Vale la pena invertir en una cámara astronómica modificada o es suficiente una DSLR común? Comparamos ventajas y desventajas de ambos equipos, incluyendo sensibilidad al hidrógeno alfa, costo y versatilidad, para ayudarte a decidir.",
      category: "Equipamiento",
      slug: "/posts/achie-lauren",
      author: {
        name: "John Doe",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    // Add more posts as needed
  ];

  return (
    <div className=" h-full px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Congreso Internacional de Astrofotografía"}
        subtitle={
          "¡Bienvenido! Aquí encontrarás historias y artículos sobre el Congreso, Astrofotografía y divulgación científica."
        }
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src="/fotografias/panoramica-1.jpg"
              alt="Featured post"
              fill
              className="rounded-lg object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-sm font-medium text-primary">
              {featuredPost.category}
            </span>
            <h1 className="font-roboto text-3xl md:text-4xl font-bold tracking-tight">
              {featuredPost.title}
            </h1>
            <p className="font-roboto text-muted-foreground line-clamp-3">
              {featuredPost.excerpt}
            </p>
            {/* Add Author Metadata Section */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative h-10 w-10">
                <Image
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  fill
                  className="rounded-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <p className="font-bebas text-sm font-medium">
                  {featuredPost.author.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(featuredPost.date), "MMM dd, yyyy")}
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href={featuredPost.slug}>Read More</Link>
            </Button>
          </div>
        </div>
        <Separator className="w-full h-[1px] bg-slate-500 mt-16" />
      </section>

      {/* Recent Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Últimos artículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.slug} className="relative">
              <article className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src="/CIAF7-D1-01 Roberto.jpg"
                    alt={post.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="font-roboto text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Add Author Metadata Section */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative h-10 w-10">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="rounded-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                      />
                    </div>
                    <div>
                      <p className="font-bebas text-sm font-medium">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link
                      href={post.slug}
                      className="group-hover:text-primary transition-colors"
                    >
                      Read Article
                    </Link>
                  </Button>
                </div>
              </article>

              <Separator
                orientation="vertical"
                className="absolute -right-4   w-[1px] top-0 h-full bg-slate-500"
              />
            </div>
          ))}
        </div>
        <Separator className="w-full h-[1px]  m-7 bg-slate-500 mt-8" />
      </section>
      <DashboardFooter />
    </div>
  );
};

export default HomePage;
