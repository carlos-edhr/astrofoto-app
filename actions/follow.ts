"use server";

import { revalidatePath } from "next/cache";
import { followUser, unfollowUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }
    return followedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const userThatIsUnfollowed = await unfollowUser(id);

    revalidatePath("/");

    if (userThatIsUnfollowed) {
      revalidatePath(`/${userThatIsUnfollowed.following.username}`);
    }

    return userThatIsUnfollowed;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
