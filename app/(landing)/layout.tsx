import Header from "./(home)/_components/main/header";
import { NavBar } from "./(home)/_components/main/navbar";
import StarsCanvas from "./(home)/_components/main/StarBackground";
import Navbar from "./(home)/_components/main/navbar1";
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
