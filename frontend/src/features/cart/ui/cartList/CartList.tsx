"use client";

import { CartItem } from "@/entities/cart";
import { useCart } from "../../api/useCart";
import { useStore } from "@/app/store/store";

export const CartList = () => {
  const { user } = useStore();
  
  const { data: cart } = useCart(user?.id);

  return (
    <ul>
      {cart?.map((item) => (
        <CartItem
          id={item.furniture_id}
          quantity={item.quantity}
          key={item.id}
        />
      ))}
    </ul>
  );
};
