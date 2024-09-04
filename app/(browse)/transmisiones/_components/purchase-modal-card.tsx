"use client";

import { UserAvatar } from "@/components/user-avatar";
import { StreamPurchaseButton } from "./stream-purchase-button";
import { useState } from "react";
import { usePurchaseModal } from "@/hooks/use-purchase-stream-modal";
import { Thumbnail } from "@/components/thumbnail";
import { User } from "@prisma/client";

interface PurchaseModalCardProps {
  data: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
  streamId: string;
  price: number;
}

const PurchaseModalCard = ({
  data,
  streamId,
  price,
}: PurchaseModalCardProps) => {
  const purchaseModal = usePurchaseModal();
  const [isModalOn, setModalOn] = useState(purchaseModal);
  //   const handleModal = () => {
  //     isModalOn.onOpen;
  //     setModalOn(!purchaseModal.isOpen);
  //   };

  return (
    <div
      onClick={() => {
        purchaseModal.onOpen();
      }}
    >
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />

        <div className="flex gap-x-3">
          <UserAvatar
            username={data.user.username}
            imageUrl={data.user.imageUrl}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-blue-500">
              {data.name}
            </p>
            <p className="text-muted-foreground">{data.user.username}</p>
          </div>
        </div>
        <div className=" w-full flex flex-col align-middle justify-center">
          <StreamPurchaseButton price={price!} streamId={streamId} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseModalCard;
