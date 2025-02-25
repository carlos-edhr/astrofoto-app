// page.tsx
import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react"; // Install lucide-react
import DashboardFooter from "../_components/dashboard-footer";

const TiendaPage = () => {
  const products = [
    {
      title: "Telescopio Astronómico Profesional 200mm",
      price: 599.99,
      previousPrice: 799.99,
      rating: 4.5,
      reviews: 1284,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Telescopios",
      brand: "AstroMaster",
      stock: 15,
      freeShipping: true,
      slug: "/product/telescopio-profesional",
    },
    {
      title: "Trípode de Aluminio para Astrofotografía",
      price: 149.99,
      rating: 4.2,
      reviews: 892,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "PhotoPro",
      stock: 32,
      freeShipping: true,
      slug: "/product/tripode-astro",
    },
    // Add other products with similar structure
    {
      title: "Cámara CCD para Astrofotografía",
      price: 1299.99,
      previousPrice: 1499.99,
      rating: 4.8,
      reviews: 654,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Cámaras",
      brand: "SkyWatcher",
      stock: 8,
      freeShipping: true,
      slug: "/product/camera-ccd",
    },
    {
      title: "Filtro de Nebulosa para Telescopios",
      price: 79.99,
      rating: 4.6,
      reviews: 432,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "Optolong",
      stock: 25,
      freeShipping: true,
      slug: "/product/filtro-nebulosa",
    },
    {
      title: "Montura Ecuatorial Motorizada",
      price: 899.99,
      previousPrice: 999.99,
      rating: 4.7,
      reviews: 321,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Monturas",
      brand: "Celestron",
      stock: 12,
      freeShipping: true,
      slug: "/product/montura-ecuatorial",
    },
    {
      title: "Ocular de Gran Campo 20mm",
      price: 49.99,
      rating: 4.4,
      reviews: 210,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "Baader",
      stock: 50,
      freeShipping: true,
      slug: "/product/ocular-gran-campo",
    },
    {
      title: "Adaptador T para Cámaras DSLR",
      price: 29.99,
      rating: 4.3,
      reviews: 150,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "Orion",
      stock: 40,
      freeShipping: true,
      slug: "/product/adaptador-t",
    },
    {
      title: "Telescopio Refractor 90mm",
      price: 299.99,
      previousPrice: 349.99,
      rating: 4.5,
      reviews: 789,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Telescopios",
      brand: "Meade",
      stock: 20,
      freeShipping: true,
      slug: "/product/telescopio-refractor",
    },
    {
      title: "Cámara DSLR para Astrofotografía",
      price: 999.99,
      rating: 4.7,
      reviews: 543,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Cámaras",
      brand: "Canon",
      stock: 10,
      freeShipping: true,
      slug: "/product/camera-dslr",
    },
    {
      title: "Filtro Solar para Telescopios",
      price: 59.99,
      rating: 4.6,
      reviews: 298,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "Thousand Oaks",
      stock: 30,
      freeShipping: true,
      slug: "/product/filtro-solar",
    },
    {
      title: "Montura Altazimutal Manual",
      price: 199.99,
      rating: 4.2,
      reviews: 123,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Monturas",
      brand: "Vixen",
      stock: 15,
      freeShipping: true,
      slug: "/product/montura-altazimutal",
    },
    {
      title: "Ocular Zoom 8-24mm",
      price: 99.99,
      rating: 4.5,
      reviews: 456,
      image: "/2024-CIAF7_Invitados.jpg",
      category: "Accesorios",
      brand: "Celestron",
      stock: 35,
      freeShipping: true,
      slug: "/product/ocular-zoom",
    },
  ];

  return (
    <div className="h-full px-4 md:px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Tienda"}
        subtitle={
          "Aquí encontrarás mercancía relacionada al Congreso Internacional de Astrofotografía."
        }
      />

      {/* Product Grid Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
        <Separator className="my-8" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-card rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <Link href={product.slug} className="block relative mb-3">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:opacity-90 transition-opacity"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  />
                  {/* Stock Badge */}
                  {product.stock < 20 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                      Solo {product.stock} en stock
                    </div>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Category and Brand */}
                <div className="text-sm text-muted-foreground">
                  <span>{product.brand}</span>
                  <span className="mx-1">•</span>
                  <span>{product.category}</span>
                </div>

                {/* Product Title */}
                <Link href={product.slug}>
                  <h3 className="font-medium line-clamp-2 text-sm hover:text-primary">
                    {product.title}
                  </h3>
                </Link>

                {/* Ratings */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "fill-transparent"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-2">
                  {product.previousPrice && (
                    <span className="text-sm line-through text-muted-foreground">
                      ${product.previousPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-lg font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                {product.freeShipping && (
                  <p className="text-sm text-green-600">Envío gratis</p>
                )}

                {/* Add to Cart */}
                <Button className="w-full mt-2" size="sm">
                  Comprar producto
                </Button>
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

export default TiendaPage;
