"use client";

import { useBurgerMenu } from "../../hooks/useBurgerMenu";
import styles from "./BurgerButton.module.scss";

export const BurgerButton = () => {
  const { isOpen, toggleMenu } = useBurgerMenu();

  return (
    <button type="button" onClick={toggleMenu} className={`${styles.button} ${isOpen ? styles.buttonActive : ""}`}>
      <span className={`${styles.buttonLine} ${isOpen ? styles.buttonActiveLine : ""}`} />
    </button>
  );
};
