"use client";
// import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { useAction } from "@/hooks/use-action";
import { usePurchaseModal } from "@/hooks/use-purchase-stream-modal";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { StreamPurchaseButton } from "@/app/(browse)/transmisiones/_components/stream-purchase-button";

interface PurchaseModalProps {
  streamId: string;
  price: number;
}

export const PurchaseModal = ({ streamId, price }: PurchaseModalProps) => {
  const purchaseModal = usePurchaseModal();
  const [isLoading, setIsLoading] = useState(false);

  //   const { execute, isLoading } = useAction(stripeRedirect, {
  //     onSuccess: (data) => {
  //       window.location.href = data;
  //     },
  //     onError: (error) => {
  //       toast.error(error);
  //     },
  //   });

  const onClick = async () => {
    // execute({});
    // try {
    //   setIsLoading(true);
    //   const response = axios.post(`/api/transmisiones/${streamId}/checkout`);
    //   window.location.assign((await response).data.url);
    // } catch {
    //   toast.error("Something went wrong");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Dialog open={purchaseModal.isOpen} onOpenChange={purchaseModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden text-slate-300">
        <div className="aspect-video relative flex items-center justify-center">
          <Image
            src="/CIAF7 Logo-33.png"
            alt="Logo Congreso"
            className="object-cover"
            fill
          />
        </div>
        <div className=" mx-auto space-y-6 p-6">
          <h2>
            ¡Compra tu entrada a la tranmisión del Congreso Internacional de
            Astrofotografía 2025!
          </h2>
          <p className="text-xs font-semibold text-primaryLanding">
            ¡Promoción especial de black friday!
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Lorem ipsum voluptatibus commodi! </li>
              <li>Accusantium sapiente eos rem.</li>
              <li>Lorem ipsum voluptatibus commodi! </li>
              <li>Accusantium sapiente!</li>
            </ul>
          </div>
          <StreamPurchaseButton streamId={streamId} price={price} />
          {/* <Button
            // disabled={isLoading}
            onClick={onClick}
            className="w-full"
            variant="primary"
          >
            Comprar entrada
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
