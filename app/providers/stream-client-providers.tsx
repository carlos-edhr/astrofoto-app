"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { tokenProvider } from "../stream/stream.actions";
import { Loader } from "@/components/loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const user = useCurrentUser();

  useEffect(() => {
    if (!user) return;
    if (!apiKey) throw new Error("Missing Stream API Key");
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.name || user?.email,
        image: user?.image || undefined,
      },
      tokenProvider,
    });
    setVideoClient(client);
  }, [user]);

  if (!videoClient) return <Loader />;
  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
