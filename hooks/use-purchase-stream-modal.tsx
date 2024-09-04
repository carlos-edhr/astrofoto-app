import { create } from "zustand";

type PurchaseStreamStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePurchaseModal = create<PurchaseStreamStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
