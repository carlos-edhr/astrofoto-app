import { db } from "@/lib/db";

export const getStreamByUserId = async (userId: string) => {
  try {
    const stream = await db.stream.findUnique({ where: { userId } });

    return stream;
  } catch {
    return null;
  }
};

export const getStreamById = async (id: string) => {
  try {
    const stream = await db.stream.findUnique({ where: { id } });

    return stream;
  } catch {
    return null;
  }
};
