import { currentUser } from "./auth";
import { db } from "./db";

export const getStreams = async () => {
  let userId;

  try {
    const user = await currentUser();
    userId = user?.id;
  } catch {
    userId = null;
  }

  let streams = [];

  // if (userId) {
  //   streams = await db.stream.findMany({
  //     where: {
  //       user: {
  //         NOT: {
  //           blocking: {
  //             some: {
  //               blockedId: userId,
  //             },
  //           },
  //         },
  //       },
  //     },

  //     select: {
  //       id: true,
  //       user: true,
  //       thumbnailUrl: true,
  //       name: true,
  //       isLive: true,
  //       price: true,
  //       isFree: true,
  //     },
  //     orderBy: [
  //       {
  //         isLive: "desc",
  //       },
  //       {
  //         updatedAt: "desc",
  //       },
  //     ],
  //   });
  // } else {
  streams = await db.stream.findMany({
    select: {
      id: true,
      user: true,
      thumbnailUrl: true,
      name: true,
      isLive: true,
      price: true,
      isFree: true,
    },
    orderBy: [
      {
        isLive: "desc",
      },
      {
        updatedAt: "desc",
      },
    ],
  });

  return streams;
};
