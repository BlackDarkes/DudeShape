import { Button } from "@/shared/ui";
import styles from './HeroInfo.module.scss'

export const HeroInfo = () => {
  return (
    <div className={styles.info}>
      <div>
        <h1 className={styles.infoTitle}>We Help You Make Modern Furniture</h1>
        <p className={styles.infoText}>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
      </div>
      <Button ariaLabel="Explore More" className={styles.infoButton}>Explore More</Button>
    </div>
  );
}