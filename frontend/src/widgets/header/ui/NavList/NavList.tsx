import Link from "next/link";
import { navigationItem } from "../../constants/navigationItems";
import styles from './NavList.module.scss'

export const NavList = () => {
  return (
    <ul className={styles.list}>
      {navigationItem.map((navItem) => (
        <li key={navItem.id}>
          <Link href={navItem.href} className={styles.listLink}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  );
}