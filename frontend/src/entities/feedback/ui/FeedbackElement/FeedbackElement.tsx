import Image from "next/image";
import { IFeedback } from "../../types/feedback.interface";
import IconStar from "../../assets/star.svg";
import styles from './FeedbackElement.module.scss'

interface IFeedbackElementProps {
  feedback: IFeedback;
}

export const FeedbackElement = ({ feedback }: IFeedbackElementProps) => {
  return (
    <div className={styles.info}>
      <p className={styles.infoFeedback}>{feedback.message}</p>

      <div className={styles.infoUser}>
        <Image src={`${process.env.API_URL}/${feedback.avatar}`} className={styles.infoAvatar} alt="avatar" width={50} height={50} />
        <div>
          <p className={styles.infoName}>{feedback.name}</p>
          <p className={styles.infoStars}>
            <IconStar className={styles.infoStarsIcon} />
            <span>{feedback.stars}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
