import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import DashboardFooter from "../_components/dashboard-footer";

const GaleriaPage = () => {
  return (
    <div className="h-full px-8 max-w-screen-2xl mx-auto ">
      <DashboardHeader
        title={"Galería"}
        subtitle={
          "Aquí encontrarás nuestro trabajo de Astrofotografía, así como fotografías de eventos pasados y de nuestra comunidad."
        }
      />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Astrofotografía</h2>

        <Separator className="w-full h-[1px]  m-7 bg-slate-500 mt-8" />
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">
          Fotografías del Congreso y otros eventos
        </h2>

        <Separator className="w-full h-[1px]  m-7 bg-slate-500 mt-8" />
      </section>
      <DashboardFooter />
    </div>
  );
};

export default GaleriaPage;
