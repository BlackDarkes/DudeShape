import Image from "next/image";
import { IFeedback } from "../../types/feedback.interface";
import IconStar from "../../assets/star.svg";

interface IFeedbackElementProps {
  feedback: IFeedback;
}

export const FeedbackElement = ({ feedback }: IFeedbackElementProps) => {
  return (
    <div>
      <p>{feedback.message}</p>

      <div>
        <Image src={feedback.avatar || '/'} alt="avatar" width={50} height={50} />
        <div>
          <h3>{feedback.name}</h3>
          <p>
            <IconStar />
            <span>{feedback.stars}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
