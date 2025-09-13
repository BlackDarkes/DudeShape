"use client"

import { Container } from "@/shared/ui/Container/Container";
import { FeedbackInfo } from "../FeedbackInfo/FeedbackInfo";
import Image from "next/image";
import styles from './Feedback.module.scss'

export const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <Container className={styles.feedbackContainer}>
        <div className={styles.feedbackContainerImage}>
          <Image src={"/feedback/feedback.png"} className={styles.feedbackImage} alt="feedback" width={459} height={492} />
        </div>

        <FeedbackInfo />
      </Container>
    </section>
  );
}