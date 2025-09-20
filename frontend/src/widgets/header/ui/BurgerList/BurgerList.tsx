"use client";

import { Button } from "@/shared/ui";
import { useBurgerMenu } from "../../hooks/useBurgerMenu";
import { NavList } from "../NavList/NavList";
import styles from "./BurgerList.module.scss";
import { useStore } from "@/app/store/store";
import { useLogout } from "@/features/auth";

export const BurgerList = () => {
  const { isOpen } = useBurgerMenu();
  const { handleType, handleModalOpen, toggleOpen, logout, user } = useStore();
  const { mutate } = useLogout();

  return (
    <div
      className={`${styles.burgerList} ${
        isOpen ? styles.burgerListActive : ""
      }`}
    >
      <NavList className={styles.burgerListNav} />

      <div className={styles.burgerListButtons}>
        {user ? (
          <>
            <Button
              ariaLabel="profile"
              className={styles.burgerListButton}
              tabindex={-1}
              onClick={() => {
                console.log("Profile cart");
              }}
            >
              Cart
            </Button>
            <Button
              ariaLabel="logout"
              className={styles.burgerListButton}
              tabindex={-1}
              onClick={() => {
                logout();
                mutate()
                toggleOpen();
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              ariaLabel="Login"
              className={styles.burgerListButton}
              tabindex={-1}
              onClick={() => {
                handleModalOpen();
                handleType("login");
                toggleOpen();
              }}
            >
              Login
            </Button>
            <Button
              ariaLabel="Register"
              className={styles.burgerListButton}
              tabindex={-1}
              onClick={() => {
                handleModalOpen();
                handleType("register");
                toggleOpen();
              }}
            >
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
