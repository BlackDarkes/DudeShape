import { FormSubscribe } from "@/features/subNews";
import { Container } from "@/shared/ui";
import styles from './Subscribe.module.scss'

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <Container className={styles.subscribeContainer}>
        <h1 className={styles.subscribeTitle}>Subscribe to get the latest news about us</h1>
        <p className={styles.subscribeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>

        <FormSubscribe />
      </Container>
    </section>
  );
}