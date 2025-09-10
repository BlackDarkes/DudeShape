import { AboutList } from "../AboutList/AboutList";
import styles from './AboutInfo.module.scss'

export const AboutInfo = () => {
  return (
    <div className={styles.aboutInfo}>
      <div>
        <h2 className={styles.aboutInfoTitle}>About Us</h2>
        <p className={styles.aboutInfoText}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
      </div>

      <AboutList />
    </div>
  );
}