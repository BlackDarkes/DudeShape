"use client"

import { useStore } from '@/app/store/store';
import styles from './ModalButton.module.scss'

export const ModalButton = () => {
  const { handleModalOpen } = useStore();

  return (
    <button className={styles.close} onClick={() => handleModalOpen()}></button>
  );
}