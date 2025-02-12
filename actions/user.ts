"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateUser = async (values: Partial<User>) => {
  const self = await currentUser();
  if (!self) {
    throw new Error("User not found");
  }
  const validData = {
    bio: values.bio,
  };

  const user = await db.user.update({
    where: { id: self.id },
    data: { ...validData },
  });
  revalidatePath(`/${self.username}`);
  revalidatePath(`/u/${self.username}`);
  return user;
};
