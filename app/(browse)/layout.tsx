import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Container } from "./_components/container";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { getSelfByUsername } from "@/lib/auth-service";

interface BrowseLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const BrowseLayout = async ({ params, children }: BrowseLayoutProps) => {
  // try {
  //   const self = await getSelfByUsername(params.username);
  // } catch {
  //   redirect("/sign-up");
  // }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
