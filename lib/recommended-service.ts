// import { db } from "@/lib/db";
// import { currentUser } from "./auth";

// export const getRecommended = async () => {
//   let userId;

//   try {
//     const self = await currentUser();
//     userId = self!.id;
//   } catch {
//     userId = null;
//   }

//   let users = [];

//   if (userId) {
//     users = await db.user.findMany({
//       where: {
//         AND: [
//           {
//             NOT: {
//               id: userId,
//               isAdmin: false,
//             },
//           },
//           {
//             NOT: {
//               followedBy: {
//                 some: {
//                   followerId: userId,
//                 },
//               },
//             },
//             isAdmin: true,
//           },
//           {
//             NOT: {
//               blocking: {
//                 some: {
//                   blockedId: userId,
//                 },
//               },
//             },
//           },
//         ],
//       },
//       include: {
//         stream: {
//           select: {
//             isLive: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//   } else {
//     users = await db.user.findMany({
//       include: {
//         stream: {
//           select: {
//             isLive: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//   }

//   return users;
// };
