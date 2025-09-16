import { StateCreator } from "zustand";

export interface IUserSlice {
  id: string | null;
  name: string | null;
  email: string | null;
}

export const userSlice: StateCreator<IUserSlice> = () => ({
  id: null,
  name: null,
  email: null,
})