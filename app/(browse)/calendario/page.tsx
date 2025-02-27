// page.tsx
import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react"; // Install lucide-react
import DashboardFooter from "../_components/dashboard-footer";
import { DataCalendar } from "./_components/data-calendar";

const CalendarPage = () => {
  return (
    <div className="h-full px-4 md:px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Calendario"}
        subtitle={
          "Aquí encontrarás el calendario de actividades y eventos del Congreso Internacional de Astrofotografía."
        }
      />

      {/* Product Grid Section */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Calendario de Actividades</h2>
        <Separator className="my-8" />
        <DataCalendar data={[]} />
      </section>

      <Separator className="my-8" />
      <DashboardFooter />
    </div>
  );

  // return (
  //   <div className="h-full px-4 md:px-8 max-w-screen-2xl mx-auto">
  //     <DashboardHeader
  //       title={"Tienda"}
  //       subtitle={
  //         "Aquí encontrarás mercancía relacionada al Congreso Internacional de Astrofotografía."
  //       }
  //     />

  //     {/* Product Grid Section */}
  //     <section className="container mx-auto px-4 py-6">
  //       <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
  //       <Separator className="my-8" />
  //       <DataCalendar />
  //     </section>

  //     <Separator className="my-8" />
  //     <DashboardFooter />
  //   </div>
  // );
};

export default CalendarPage;
