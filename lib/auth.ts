"use server";

import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();
  // console.log("CurrentUser >>>>> ", session);
  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();
  // console.log("Session >>>>> ", session);
  return session?.user?.role;
};

// export const useAuth = () => {
//   // const session = useSession();
//   return null;
// };

// export const useUser = () => {
//   const session = useSession();
//   return session.data?.user;
// };

// export const useCurrentUser = async () => {
//   // const auth = await clerkCurrentUser();

//   return null;
// };
// }
