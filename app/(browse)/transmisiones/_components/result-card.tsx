import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { User, UserRole } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getUserByUsername } from "@/lib/user-service";
import { StreamPurchaseButton } from "./stream-purchase-button";

import { TicketCheck, UserCheck } from "lucide-react";
import { checkStreamPayment } from "@/lib/check-stream-payment";
import PurchaseModalCard from "./purchase-modal-card";

// import { useState } from "react";

// TODO | MUST TRIGGER PURCHASE MODAL FROM INSIDE THE LINK

interface ResultCardProps {
  data: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
    price: number | null;
    isFree: boolean;
    id: string;
    role: UserRole;
  };
}

export const ResultCard = async ({ data }: ResultCardProps) => {
  const cardUser = data.user.username
    ? await getUserByUsername(data.user.username)
    : null;
  //@ts-ignore
  const streamId = cardUser?.stream?.id || data.id;
  const price = data.price;
  // const userId = data.user.id;
  const isStreamFree = data.isFree;

  // const purchaseModal = usePurchaseModal();

  // const [isModalOn, setModalOn] = useState(false);

  const handleModalOn = () => {
    "use client";
    // console.log("Client talking");
  };
  // console.log("Stream Id =>>>>>> ", streamId);
  const isPurchased = await checkStreamPayment(streamId);
  // console.log("isPurchased ->>>>>>> ", isPurchased);
  // const externalUserId = data.user.externalUserId;

  // const { userId: externalUserId } = auth();

  // const purchased = await db.purchase.findUnique({
  //   where: {
  //     userId_streamId: {
  //       userId: externalUserId!,
  //       streamId,
  //     },
  //   },
  // });

  if (data.user.role === "USER") {
    return <></>;
  }

  // If the stream is not free and it has not been purchased'
  // if (!isStreamFree && !isPurchased) {
  //   return <PurchaseModalCard data={data} streamId={streamId} price={price!} />;
  // }
  // If the stream is Free or already purchased
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.image || "/CIAF7 Logo-35.png"}
          isLive={data.isLive}
          username={data.user.username || ""}
        />

        <div className="flex gap-x-3">
          <UserAvatar
            username={data.user.username || ""}
            imageUrl={data.user.image || "/CIAF7 Logo-35.png"}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-blue-500">
              {data.name}
            </p>
            <p className="text-muted-foreground">{data.user.username}</p>
          </div>
        </div>
        {!isStreamFree && !isPurchased && (
          <StreamPurchaseButton price={price!} streamId={streamId} />
        )}
        {isPurchased && (
          <p className="flex text-xs text-muted-foreground justify-start  text-primaryLanding">
            <TicketCheck className="flex h-4 w-4 mr-2" />
            Ya tienes acceso a esta transmisión
          </p>
        )}
        {isStreamFree && (
          <p className="flex text-xs text-muted-foreground justify-start ">
            <UserCheck className="flex h-4 w-4 mr-2" />
            Esta transmisión es de acceso libre
          </p>
        )}
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="h-full w-full space-y-4">
      <ThumbnailSkeleton />
      <div className="flex gap-x-3">
        <UserAvatarSkeleton />
        <div className="flex flex-col gap-y-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
};
