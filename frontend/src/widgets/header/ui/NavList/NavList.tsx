import Link from "next/link";
import { navigationItem } from "../../constants/navigationItems";
import styles from './NavList.module.scss'

interface INavListProps {
  className?: string
}

export const NavList = ({ className }: INavListProps) => {
  return (
    <ul className={`${styles.list} ${className ? className : ""}`}>
      {navigationItem.map((navItem) => (
        <li key={navItem.id}>
          <Link href={navItem.href} className={styles.listLink}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  );
}