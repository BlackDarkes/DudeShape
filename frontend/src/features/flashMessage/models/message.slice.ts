import { StateCreator } from "zustand";

export interface IMessageSlice {
  message: string | null;
  setMessage: (message: string | null) => void;
  clearMessage: () => void;
}

export const messageSlice: StateCreator<IMessageSlice> = (set) => ({
  message: null,
  setMessage: (message) => set(() => ({ message: message })),
  clearMessage: () => set(() => ({ message: null })),
})