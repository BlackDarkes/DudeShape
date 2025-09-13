import Link from "next/link";
import { socialItems } from "../../constants/socialItems";
import { memo } from "react";
import styles from './ListSocial.module.scss'

const ListSocial = memo(() => {
  return (
    <ul className={styles.list}>
      {socialItems.map(({ id, icon: Icon }) => (
        <Link href={"/"} key={id}>
          <Icon />
        </Link>
      ))}
    </ul>
  );
});

ListSocial.displayName = "ListSocial";
export { ListSocial };