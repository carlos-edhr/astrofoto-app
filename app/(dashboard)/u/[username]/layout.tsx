import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { Container } from "./_components/container";
import { currentUser } from "@/lib/auth";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await currentUser();

  console.log(self?.role);

  if (!self) {
    redirect("/");
  }

  if (self.role !== "ADMIN") {
    redirect("/transmisiones");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
