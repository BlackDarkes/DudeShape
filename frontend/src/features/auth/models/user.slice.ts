import { StateCreator } from "zustand";
import { IUser } from "../types/user.interface";

export interface IUserSlice {
  assesToken: string | null;
  user: IUser | null;
  setUser: (user: IUser| null) => void;
  logout: () => void;
}

export const userSlice: StateCreator<IUserSlice> = (set) => ({
  assesToken: null,
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  logout: () => set(() => ({ assesToken: null, user: null })),
});