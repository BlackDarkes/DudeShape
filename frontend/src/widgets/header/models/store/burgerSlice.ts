import { StateCreator } from "zustand";

export interface IBurgerSlice {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const burgerSlice: StateCreator<IBurgerSlice> = (set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
});