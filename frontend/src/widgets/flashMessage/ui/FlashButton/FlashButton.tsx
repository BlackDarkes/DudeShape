"use client"

import { useStore } from '@/app/store/store';
import styles from './FlashButton.module.scss'

export const FlashButton = () => {
  const { handleFlashModal } = useStore();

  return (
    <button type="button" className={styles.button} onClick={() => handleFlashModal()} />
  );
}