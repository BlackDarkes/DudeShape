import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { burgerSlice, IBurgerSlice } from "@/widgets/header";
import { categorySlice, ICategorySlice } from "@/widgets/categories";
import {
  IModalSlice,
  modalSlice,
  IUserSlice,
  userSlice,
} from "@/widgets/authForm";

type AppStateType = IBurgerSlice & ICategorySlice & IUserSlice & IModalSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...categorySlice(set, get, api),
      ...userSlice(set, get, api),
      ...modalSlice(set, get, api),
    }),
    { name: "app-store" }
  )
);
