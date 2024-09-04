import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkStreamPayment = async (streamId: string) => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const purchased = await db.purchase.findUnique({
    where: {
      userId_streamId: {
        userId,
        streamId,
      },
    },
  });

  if (purchased) {
    return true;
  }
  return false;
};
