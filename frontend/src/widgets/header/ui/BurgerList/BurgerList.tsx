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
        <Button ariaLabel="Login" className={styles.burgerListButton} tabindex={-1}>Login</Button>
        <Button ariaLabel="Register" className={styles.burgerListButton} tabindex={-1}>Register</Button>
      </div>
    </div>
  );
}