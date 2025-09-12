import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  burgerSlice,
  IBurgerSlice,
} from "@/widgets/header/models/store/burgerSlice";
import { categorySlice, ICategorySlice } from "@/widgets/categories/models/store/categorySlice";

type AppStateType = IBurgerSlice & ICategorySlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
      ...categorySlice(set, get, api),
    }),
    { name: "app-store" }
  )
);
