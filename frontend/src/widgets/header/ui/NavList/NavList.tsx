import Link from "next/link";
import { navigationItem } from "../../constants/navigationItems";
import styles from './NavList.module.scss'
import { memo } from "react";

interface INavListProps {
  className?: string
}

const NavList = memo(({ className }: INavListProps) => {
  return (
    <ul className={`${styles.list} ${className ? className : ""}`}>
      {navigationItem.map((navItem) => (
        <li key={navItem.id}>
          <Link href={navItem.href} className={styles.listLink}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  );
})

NavList.displayName = "NavList";
export { NavList };