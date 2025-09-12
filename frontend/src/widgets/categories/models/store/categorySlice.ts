import { StateCreator } from "zustand";

export interface ICategorySlice {
  categoryIndex: number;
  handleIndex: (index: number) => void;
  categoryNumber: number;
  handleNumber: (id: number) => void;
}

export const categorySlice: StateCreator<ICategorySlice> = (set) => ({
  categoryIndex: 1,
  handleIndex: (index: number) => set(() => ({ categoryIndex: index })),
  categoryNumber: 1,
  handleNumber: (id: number) => set(() => ({ categoryNumber: id })),
})