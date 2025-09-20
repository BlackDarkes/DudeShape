"use client"

import { CartList } from "@/features/cart";
import { CartButton } from "../CartButton/CartButton";
import { CartTotal } from "@/features/cart";
import styles from './CartModal.module.scss'
import { useModalScroll } from "@/widgets/authForm/hooks/useModalScroll";

export const CartModal = () => {
  useModalScroll();

  return (
    <section className={styles.modal}>
      <CartButton />

      <div>
        <CartList />

        <CartTotal />
      </div>
    </section>
  );
}