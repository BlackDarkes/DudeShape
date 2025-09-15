"use client"

import { FurnitureButton } from "@/entities/furniture";
import styles from './FurnituresTitle.module.scss'

interface IFurnituresTitleProps {
  scrollPreview: () => void;
  scrollNext: () => void;
}

export const FurnituresTitle = ({ scrollNext, scrollPreview }: IFurnituresTitleProps) => {
  return (
    <div className={styles.head}>
      <div className={styles.headTitleContainer}>
        <h1 className={styles.headTitle}>Our Popular Furniture</h1>
        <p className={styles.headText}>
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
      </div>
      <div className={styles.headButtons}>
        <FurnitureButton classname={styles.headButton} onClick={() => scrollPreview()} ariaLabel="arrow left">&lt;</FurnitureButton>
        <FurnitureButton classname={styles.headButton} onClick={() => scrollNext()} ariaLabel="arrow right">&gt;</FurnitureButton>
      </div>
    </div>
  );
};
