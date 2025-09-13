import { FooterFormSubscribe } from "@/features/subNews";
import styles from './FooterSubscribe.module.scss'

export const FooterSubscribe = () => {
  return (
    <div className={styles.subscribe}>
      <h3 className={styles.subscribeTitle}>Subscribe</h3>
      <p>Subscribe to get the latest news from us</p>

      <FooterFormSubscribe />
    </div>
  );
}