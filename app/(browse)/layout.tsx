import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Container } from "./_components/container";
import Navbar from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { getSelfByUsername } from "@/lib/auth-service";
import { ModalProvider } from "@/components/providers/modal-provider";

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

  //TODO: UPWARD COMMUNICATION FROM CHILD TO PARENT
  //NEED TO PASS streamId prop FROM RESULT CARD TO HERE
  const streamId = "ddb73711-f7fc-41e3-bbb8-07db43027e29";
  const price = 2000;

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        <Container>
          <ModalProvider streamId={streamId} price={price} />
          {children}
        </Container>
      </div>
    </>
  );
};

export default BrowseLayout;
