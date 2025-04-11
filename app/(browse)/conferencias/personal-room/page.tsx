"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useGetCallById } from "@/hooks/use-get-call-by-id";

import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useParams, useRouter } from "next/navigation";

interface PersonalRoomMeetingProps {
  title: string;
  description: React.ReactNode;
}
const PersonalRoomMeeting = () => {
  const user = useCurrentUser();
  const meetingId = user?.id;
  const { toast } = useToast();
  const client = useStreamVideoClient();
  const router = useRouter();

  const params = useParams();

  const meetingRoomLink = `${process.env.NEXT_PUBLIC_APP_URL}/conferencias/conferencia/${meetingId}?personal=true`;

  const Table = ({ title, description }: PersonalRoomMeetingProps) => (
    <div className="flex p-8 bg-slate-800 flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className=" text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );

  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/conferencias/conferencia/${meetingId}?personal=true`);
  };

  return (
    <section className="flex p-8   size-full flex-col gap-10 text-gray-300 rounded-md">
      <div className="flex flex-col p-2 md:p-4 rounded-md bg-slate-800">
        <h1 className="text-3xl font-bold ">Personal Room</h1>
        <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
          <Table
            title="Sala"
            description={`Sala de Conferencias de ${user?.username}`}
          />

          <Table title="ID de la Conferencia" description={`${meetingId}`} />

          <Table
            title="Link de invitación"
            description={
              <span
                className="cursor-pointer text-blue-400 underline"
                onClick={() => {
                  navigator.clipboard.writeText(meetingRoomLink);
                  toast({
                    title: "Link copiado al portapapeles",
                    description: "Puedes ingresar el link en tu navegador",
                    duration: 6000,
                  });
                }}
              >
                {meetingRoomLink}
              </span>
            }
          />
        </div>
        <div className="flex gap-5">
          <Button className="bg-blue-400" onClick={startRoom}>
            Comenzar la Conferencia
          </Button>
          <Button
            className="bg-sky-400"
            onClick={() => {
              navigator.clipboard.writeText(meetingRoomLink);
              toast({
                title: "Link copiado al portapapeles",
                description: "Puedes ingresar el link en tu navegador",
                duration: 6000,
              });
            }}
          >
            Copiar la URL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalRoomMeeting;
