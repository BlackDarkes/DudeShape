"use client";

import { useStore } from "@/app/store/store";
import { FlashButton } from "../FlashButton/FlashButton";
import { useTimeClose } from "@/features/flashMessage";
import styles from './FlashMessage.module.scss'

export const FlashMessage = () => {
  const { message, flashIsOpen } = useStore();

  useTimeClose();

  return (
    <section className={`${styles.flash} ${flashIsOpen ? styles.flashShow : ""}`}>
      <FlashButton />

      <p className={styles.flashText}>{message}</p>
    </section>
  );
};
