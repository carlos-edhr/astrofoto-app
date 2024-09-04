"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface StreamPurchaseButtonProps {
  price?: number;
  streamId?: string;
}

export const StreamPurchaseButton = ({
  price,
  streamId,
}: StreamPurchaseButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = axios.post(`/api/transmisiones/${streamId}/checkout`);

      window.location.assign((await response).data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full justify-center "
    >
      Comprar acceso por {formatPrice(price!)}
    </Button>
  );
};
