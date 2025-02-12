import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockedbyUser } from "@/lib/block-service";
import { StreamPlayer } from "@/components/stream-player";
import { checkStreamPayment } from "@/lib/check-stream-payment";
import StreamProductPage from "./_components/stream-product-page";
import StreamPurchasePage from "@/components/stream-purchase/stream-purchase-page";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);
  // console.log(user?.stream);

  if (!user || !user.stream) {
    notFound();
  }
  // if (!user) {
  //   notFound();
  // }
  // const isPurchased = await checkStreamPayment(user.stream.id);
  // const isStreamFree = user.stream?.isFree;

  // if (!isPurchased && !isStreamFree) {
  //   return <StreamPurchasePage />;
  // }
  // const isFollowing = await isFollowingUser(user.id);
  // const isBlocked = await isBlockedbyUser(user.id);

  // if (isBlocked) {
  //   notFound();
  // }
  return (
    <div>
      <StreamPlayer
        user={user}
        stream={user.stream}
        // isFollowing={isFollowing}
      />
    </div>
  );
};

export default UserPage;
