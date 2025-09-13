import { FooterList } from "../FooterList/FooterList";
import styles from './ListFooter.module.scss'

interface IListFooterProps {
  title: string;
  list: string[];
}
  
export const FooterListItem = ({ title, list }: IListFooterProps) => {
  return (
    <div className={styles.footerList}>
      <h3 className={styles.footerListTitle}>{title}</h3>
      <FooterList list={list} />
    </div>
  );
}