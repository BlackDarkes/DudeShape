import { Container } from "@/shared/ui/Container/Container";
import { Logo } from "@/shared/ui/Logo/Logo";
import { NavList } from "../NavList/NavList";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import IconSearch from "../../assets/search.svg";
import styles from './Header.module.scss'
import { BurgerList } from "../BurgerList/BurgerList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo />

        <NavList className={styles.headerNav} />

        <div className={styles.headerButtons}>
          <button type="button" className={styles.headerSearch}><IconSearch /></button>
          <BurgerButton />
        </div>

        <BurgerList />
      </Container>
    </header>
  );
}