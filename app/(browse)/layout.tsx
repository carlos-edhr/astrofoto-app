import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Container } from "./_components/container";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { ModalProvider } from "@/components/providers/modal-provider";
import { currentUser } from "@/lib/auth";
import DashboardFooter from "./_components/dashboard-footer";
import StreamVideoProvider from "../providers/stream-client-providers";

interface BrowseLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const BrowseLayout = async ({ params, children }: BrowseLayoutProps) => {
  try {
    const self = await currentUser();
  } catch {
    redirect("/auth/login");
  }

  return (
    <>
      <StreamVideoProvider>
        <Navbar />
        <div className="flex h-full pt-20 bg-blackSpace">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>

          <Container>
            {/* <ModalProvider streamId={streamId} price={price} /> */}
            {children}
          </Container>
        </div>
      </StreamVideoProvider>
    </>
  );
};

export default BrowseLayout;
