"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { MeetingSetup } from "./_components/meeting-setup";
import { MeetingRoom } from "./_components/meeting-room";
import { useGetCallById } from "@/hooks/use-get-call-by-id";
import { Loader } from "lucide-react";
import { ca } from "date-fns/locale";
import { redirect } from "next/navigation";

const ConferenciaPage = ({ params }: { params: { id: string } }) => {
  const user = useCurrentUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(params.id);

  if (!user) return redirect("/sign-in");
  if (isCallLoading) return <Loader />;
  return (
    // <section className="flex size-full flex-col gap-10 text-white">
    //   <h1 className="text-3xl font-bold">
    //     <p>Conferencia: #{params.id}</p>
    //   </h1>
    // </section>
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default ConferenciaPage;
