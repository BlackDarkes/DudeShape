import { StateCreator } from "zustand";

export interface IModalSlice {
  isModalOpen: boolean;
  typeForm: "login" | "register",
  handleModalOpen: () => void;
  handleType: (type: "login" | "register") => void;
}

export const modalSlice: StateCreator<IModalSlice> = (set) => ({
  isModalOpen: false,
  typeForm: "register",
  handleModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  handleType: (type) => set(() => ({ typeForm: type }))
})