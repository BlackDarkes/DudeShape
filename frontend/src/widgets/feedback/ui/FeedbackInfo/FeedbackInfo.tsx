import { FeedbackElement, useGetFeedbackById } from "@/entities/feedback";
import styles from './FeedbackInfo.module.scss'

export const FeedbackInfo = () => {
  const { isLoading, error, data: feedback } = useGetFeedbackById("5c6b65c4-6af2-4a1b-a4b6-2074a7b95710");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  return (
    <div className={styles.info}>
      <h1 className={styles.infoTitle}>Our customers are verry importan to us</h1>
      <FeedbackElement feedback={feedback} />
    </div>
  );
}