import Link from "next/link";
import { socialItems } from "../../constants/socialItems";
import { memo } from "react";

const ListSocial = memo(() => {
  return (
    <ul>
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