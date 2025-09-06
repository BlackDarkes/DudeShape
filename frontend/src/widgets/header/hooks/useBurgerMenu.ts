"use client"

import { useState } from "react"

export const useBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return { isOpen, toggleMenu };
}