import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { LayoutList, UsersIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { EndCallButton } from "./end-call-button";
import { Loader } from "@/components/loader";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

export const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [layout, setLayout] = useState("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const router = useRouter();

  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;

      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          {/* <h1 className="text-3xl">Sala de Conferencias</h1> */}
          <CallLayout />
        </div>
        {/* Participants list - mobile overlay */}
        <div
          className={cn(
            "fixed inset-0 z-50 w-full h-full bg-[#19232d] transition-all duration-300 md:hidden",
            {
              "translate-y-0 opacity-100": showParticipants,
              "translate-y-full opacity-0 pointer-events-none":
                !showParticipants,
            },
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
          <button
            onClick={() => setShowParticipants(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-700"
          >
            Close
          </button>
        </div>
        {/* Participants list - desktop sidebar */}
        <div
          className={cn("h-[calc(100vh-86px)] hidden  ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls
          onLeave={() => {
            router.push(`/home`);
          }}
        />
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className="border-[#19232d] rounded-2xl  p-3 text-sky-1 bg-[#19232d]">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-[#19232d]" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl  dark:bg-[#020D1A] dark:text-dark-6 px-4 py-2 hover:bg-[#4c535b]">
            <UsersIcon size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};
