"use client";
import { Button } from "@/components/ui/button";
import {
  useCall,
  useCallStateHooks,
  OwnCapability,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

export const EndCallButton = () => {
  const call = useCall();
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { camera } = useCameraState();
  const { microphone } = useMicrophoneState();
  const router = useRouter();
  // const { useHasPermissions } = useCallStateHooks();
  // const canEndCall = useHasPermissions(OwnCapability.END_CALL);

  const { useLocalParticipant } = useCallStateHooks();

  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  // console.log("IS MEETING OWNER: ", isMeetingOwner);
  // console.log("USER PERMISSION TO END CALL: ", canEndCall);
  if (!isMeetingOwner) return null;

  const handleEndCall = async () => {
    // First disable camera and microphone
    await camera.disable();
    await microphone.disable();

    // Then end the call which will emit call.ended event to all participants
    await call?.endCall();
    router.push("/home");
  };

  return (
    <Button onClick={handleEndCall} className="bg-red-500">
      End call for everyone
    </Button>
  );
};
