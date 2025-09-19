import { StateCreator } from "zustand";

export interface IFlashModal {
  flashIsOpen: boolean;
  handleFlashModal: () => void;
  closeFlashModal: () => void;
}

export const flashModal: StateCreator<IFlashModal> = (set) => ({
  flashIsOpen: false,
  handleFlashModal: () => set((state) => ({ flashIsOpen: !state.flashIsOpen})),
  closeFlashModal: () => set(() => ({ flashIsOpen: false }))
})