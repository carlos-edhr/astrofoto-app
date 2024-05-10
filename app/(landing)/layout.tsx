import { NavBar } from "./landing/_components/main/navbar";
import StarsCanvas from "./landing/_components/main/StarBackground";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas />
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default LandingLayout;
