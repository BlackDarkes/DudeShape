"use client"

import { useStore } from "@/app/store/store";
import { CartTotalItem } from "@/entities/cart";

export const CartTotal = () => {
  const { user } = useStore();

  return (
    <CartTotalItem id={user?.id} quantity={2} />
  );
}