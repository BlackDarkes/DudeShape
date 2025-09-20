"use client"

import { useStore } from '@/app/store/store';
import styles from './CartButton.module.scss'

export const CartButton = () => {
  const { handleCartOpen } = useStore();

  return (
    <button type="button" className={styles.button} onClick={() => handleCartOpen()} />
  );
}