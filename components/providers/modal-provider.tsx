"use client";

import { useEffect, useState } from "react";
import { PurchaseModal } from "../modals/purchase-modal";

interface ModalProviderProps {
  streamId: string;
  price: number;
}

export const ModalProvider = ({ streamId, price }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <PurchaseModal streamId={streamId} price={price} />
    </>
  );
};
