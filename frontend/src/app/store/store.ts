import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { burgerSlice, IBurgerSlice } from "@/widgets/header/models/store/burgerSlice";

type AppStateType = IBurgerSlice;

export const useStore = create<AppStateType>()(
  devtools(
    (set, get, api) => ({
      ...burgerSlice(set, get, api),
    }),
    { name: "app-store" }
  )
)