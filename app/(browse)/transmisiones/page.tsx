import { Results } from "./_components/results";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import DashboardHeader from "../_components/dashboard-header";
import DashboardFooter from "../_components/dashboard-footer";

function StreamsPage() {
  return (
    <div className="h-full  px-8 max-w-screen-2xl mx-auto ">
      <DashboardHeader
        title={"Streams"}
        subtitle={
          "Aquí encontrarás las transmisiones en vivo del Congreso, así como de nuestros talleres y otros eventos."
        }
      />

      <Suspense>
        <Results />
      </Suspense>
      <DashboardFooter />
    </div>
  );
}
export default StreamsPage;
// export const ResultsSkeleton = () => {
//   return <div>s</div>;
// };
