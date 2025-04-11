"use client";

import React, { useState } from "react";
import { HomeCard } from "./home-card";
import { useParams, useRouter } from "next/navigation";
// import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Toaster } from "@/components/ui/toaster";
import { Textarea } from "@/components/ui/textarea";
import ReactDatePicker from "react-datepicker";
import { Input } from "@/components/ui/input";
import { currentUser } from "@/lib/auth";
import { MeetingModal } from "@/components/modals/meeting-modal";
import { useToast } from "@/components/ui/use-toast";
import {
  CalendarCheck2Icon,
  PlusCircleIcon,
  VideoIcon,
  ListIcon,
} from "lucide-react";
import Link from "next/link";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

export const MeetingTypeList = () => {
  const router = useRouter();
  const params = useParams();

  const [meetingState, setMeetingState] = useState<
    | "isScheduleMeeting"
    | "isJoiningMeeting"
    | "isSchedulingMeeting"
    | "isInstantMeeting"
    | undefined
  >();

  const user = currentUser();
  const client = useStreamVideoClient();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({
          title: "Por favor selecciona una fecha y hora",
        });
        return;
      }

      if (!values.dateTime) {
        // toast({ title: "Please select a date and time" });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create call");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      if (!values.description) {
        router.push(`/conferencias/conferencia/${call.id}`);
      }
      toast({
        title: "Conferencia creada",
        description: "La conferencia ha sido creada con éxito",
      });
    } catch (error) {
      console.error(error);
      // toast({ title: "Failed to create Meeting" });
      toast({
        title: "Error",
        description: "Se ha producido un error al crear la conferencia",
      });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_APP_URL}/conferencias/conferencia/${callDetails?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        icon={PlusCircleIcon}
        title="Nueva conferencia"
        description="Inicia una conferencia instantánea"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        icon={CalendarCheck2Icon}
        title="Agenda una reunión"
        description="Crea una reunión para más tarde"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        icon={VideoIcon}
        title="Ver Grabaciones"
        description="Revisa tus grabaciones de conferencias anteriores "
        handleClick={() => router.push(`/conferencias/recordings`)}
      />
      <Link href="/conferencias/previous">
        <HomeCard
          icon={ListIcon}
          title="Ver conferencias"
          description="Lista de todas las conferencias agendadas y previas"
          handleClick={() => setMeetingState("isJoiningMeeting")}
        />
      </Link>

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base text-normal leading-[22px] text-sky-2">
              Agrega una descripción{" "}
            </label>
            <Textarea
              className="border-none bg-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
            <div className="flex w-full flex-col gap-2.5">
              <label className="text-base text-normal leading-[22px] text-sky-2">
                Selecciona la hora y fecha de la conferencia
                <ReactDatePicker
                  selected={values.dateTime}
                  onChange={(date) => setValues({ ...values, dateTime: date! })}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full rounded bg-slate-600 p-2 focus:outline-none"
                />
              </label>
            </div>
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Se ha creado la reunión"
          className="text-center"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Vínculo copiado" });
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          buttonText="Copiar Vínculo URL de la reunión"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

      {/* <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center "
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting Link"
          className="border-none bg-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />
      </MeetingModal> */}
    </section>
  );
};
