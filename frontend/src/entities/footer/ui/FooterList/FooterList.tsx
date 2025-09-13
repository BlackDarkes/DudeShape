import Link from "next/link";
import { memo } from "react";
import styles from './FooterList.module.scss'

interface IFooterListProps {
  list: string[];
}
  
const FooterList = memo(({ list }: IFooterListProps) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item}>
          <Link href={"/"}>{item}</Link>
        </li>
      ))}
    </ul>
  );
});

FooterList.displayName = "FooterList";
export { FooterList };