"use client";

import { useBurgerMenu } from "../../hooks/useBurgerMenu";
import styles from "./BurgerButton.module.scss";

export const BurgerButton = () => {
  const { isOpen, toggleOpen } = useBurgerMenu();

  return (
    <button type="button" onClick={toggleOpen} className={`${styles.button} ${isOpen ? styles.buttonActive : ""}`}>
      <span className={`${styles.buttonLine} ${isOpen ? styles.buttonActiveLine : ""}`} />
    </button>
  );
};
