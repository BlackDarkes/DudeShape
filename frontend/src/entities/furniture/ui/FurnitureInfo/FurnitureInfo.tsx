import { Button } from "@/shared/ui";
import { IFurniture } from "../../types/furniture.interface";
import { FurnitureButton } from "../FurnitureButton/FurnitureButton";
import IconHeart from "../../assets/heart.svg";
import IconShare from '../../assets/shared.svg';
import styles from './FurnitureInfo.module.scss'
import Link from "next/link";

interface IFurnitureInfoProps {
  furnitureInfo: Omit<IFurniture, "image">
}
  
export const FurnitureInfo = ({ furnitureInfo }: IFurnitureInfoProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoHead}>
        <Link href={"/"} className={styles.infoHeadTitle}>{furnitureInfo.name}</Link>

        <div className={styles.infoHeadButtons}>
          <FurnitureButton onClick={() => {}} ariaLabel="favorites">
            <IconHeart />
          </FurnitureButton>

          <FurnitureButton onClick={() => {}} ariaLabel="share">
            <IconShare />
          </FurnitureButton>
        </div>
      </div>

      <div className={styles.infoBody}>
        <p className={styles.infoBodyPrice}>${furnitureInfo.price}</p>

        <Button ariaLabel="Buy Now" className={styles.infoBodyButton}>Buy Now</Button>
      </div>
    </div>
  );
}