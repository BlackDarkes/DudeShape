"use client"

import { Button } from "@/shared/ui";
import { useBurgerMenu } from "../../hooks/useBurgerMenu";
import { NavList } from "../NavList/NavList";
import styles from './BurgerList.module.scss'

export const BurgerList = () => {
  const { isOpen } = useBurgerMenu();

  return (
    <div className={`${styles.burgerList} ${isOpen ? styles.burgerListActive : ""}`}>
      <NavList className={styles.burgerListNav} />

      <div className={styles.burgerListButtons}>
        <Button className={styles.burgerListButton}>Login</Button>
        <Button className={styles.burgerListButton}>Register</Button>
      </div>
    </div>
  );
}