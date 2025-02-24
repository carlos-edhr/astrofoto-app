import { Results } from "./_components/results";
import { Suspense } from "react";
function Transmisiones() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto ">
      <p>PROTECTED ROUTE: DASHBAORD RESULTS</p>
      <Suspense>
        <Results />
      </Suspense>
    </div>
  );
}
export default Transmisiones;
// export const ResultsSkeleton = () => {
//   return <div>s</div>;
// };
