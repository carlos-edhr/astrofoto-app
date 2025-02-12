import { currentUser } from "./auth";
import { db } from "./db";

export const checkStreamPayment = async (streamId: string) => {
  const user = await currentUser();
  if (!user) {
    console.log("User not found");
    return false;
  }
  const userId = user.id;
  // console.log("User inside checkStreamPayment ---------->>>>>>>> ", user);

  if (!userId) {
    return false;
  }
  const { id } = user;

  // console.log("User ID ======>>>>> ", id);

  if (!id) {
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
  // console.log(" <<<<<<------ Purchased ---->>>> ", purchased);
  if (purchased) {
    return true;
  }
  return false;
};
