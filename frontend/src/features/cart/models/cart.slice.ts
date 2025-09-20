import { StateCreator } from "zustand";

export interface ICartSLice {
  cartIsOpen: boolean;
  handleCartOpen: () => void;
}

export const cartSlice: StateCreator<ICartSLice> = (set) => ({
  cartIsOpen: false,
  handleCartOpen: () => set((state) => ({ cartIsOpen: !state.cartIsOpen })),
});