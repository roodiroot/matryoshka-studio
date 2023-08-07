import { create } from "zustand";

interface ShowMenuInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSliderMenu = create<ShowMenuInterface>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
}));
