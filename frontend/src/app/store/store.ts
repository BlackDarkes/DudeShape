import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { burgerSlice, IBurgerSlice } from "@/widgets/header";
import { categorySlice, ICategorySlice } from "@/widgets/categories";
import {
  IModalSlice,
  modalSlice,
} from "@/widgets/authForm";
import { IUserSlice, userSlice } from "@/features/auth";

type AppStateType = IBurgerSlice & ICategorySlice & IUserSlice & IModalSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...categorySlice(set, get, api),
      ...modalSlice(set, get, api),
      ...userSlice(set, get, api),
    }),
    { name: "app-store" }
  )
);
