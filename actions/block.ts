"use server";

import { currentUser } from "@/lib/auth";
import { blockUser, unblockUser } from "@/lib/block-service";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!,
);

export const onBlock = async (id: string) => {
  const self = await currentUser();
  if (!self) {
    throw new Error("User not found");
  }

  let blockedUser;
  try {
    blockedUser = await blockUser(id);
  } catch {
    // this means user is a guest
  }

  try {
    if (self.id) {
      await roomService.removeParticipant(self.id, id);
    } else {
      throw new Error("User ID is undefined");
    }
  } catch {
    // this means user is not in the room
  }

  if (self) {
    revalidatePath(`/u/${self.username}/community`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const self = await currentUser();
  if (!self) {
    throw new Error("User not found");
  }
  const unblockedUser = await unblockUser(id);

  revalidatePath(`/u/${self.username}/community`);

  return unblockedUser;
};
