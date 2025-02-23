import StarsCanvas from "../(landingpage)/(home)/_components/landing-star-background";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Previous bg ---> bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800
    <div className="h-full flex items-center justify-center bg-blackSpace z-10 relative min-h-screen overflow-hidden">
      <StarsCanvas />
      {children}
    </div>
  );
};

export default AuthLayout;
