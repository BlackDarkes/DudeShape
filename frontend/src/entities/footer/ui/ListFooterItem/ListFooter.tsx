import { FooterList } from "../FooterList/FooterList";

interface IListFooterProps {
  title: string;
  list: string[];
}
  
export const FooterListItem = ({ title, list }: IListFooterProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <FooterList list={list} />
    </div>
  );
}