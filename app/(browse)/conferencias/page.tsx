// page.tsx
import Image from "next/image";
import DashboardHeader from "../_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react"; // Install lucide-react
import DashboardFooter from "../_components/dashboard-footer";
import { MeetingTypeList } from "./_components/meeting-type-list";

const ConferenciasPage = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now,
  );
  return (
    <div className="h-full px-4 md:px-8 max-w-screen-2xl mx-auto">
      <DashboardHeader
        title={"Conferencias"}
        subtitle={
          "Aquí encontrarás las conferencias del Congreso Internacional de Astrofotografía."
        }
      />

      {/* Product Grid Section */}
      <section className="flex size-full flex-col gap-10 dark:text-white">
        <h1 className="text-3xl font-bold ">Meetings</h1>
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

      <Separator className="my-8" />
      <DashboardFooter />
    </div>
  );
};

export default ConferenciasPage;
