"use client"

import { useStore } from "@/app/store/store";



export const useBurgerMenu = () => {
  const { isOpen, toggleOpen } = useStore();

  return { isOpen, toggleOpen };
}