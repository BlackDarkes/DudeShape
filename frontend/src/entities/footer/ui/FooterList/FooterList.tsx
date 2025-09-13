import Link from "next/link";
import { memo } from "react";

interface IFooterListProps {
  list: string[];
}
  
const FooterList = memo(({ list }: IFooterListProps) => {
  return (
    <ul>
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