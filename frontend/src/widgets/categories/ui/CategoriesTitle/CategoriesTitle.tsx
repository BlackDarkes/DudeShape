"use client"

import styles from './CategoriesTitle.module.scss'
import { useStore } from '@/app/store/store';

export const CategoriesTitle = () => {
  const { categoryIndex, handleIndex } = useStore();

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>All Furniture</h1>

      <div className={styles.containerButtons}>
        <button type="button" className={`${styles.containerButton} ${categoryIndex === 1 ? styles.containerButtonActive : ""}`} onClick={() => handleIndex(1)}>Shop By Room</button>
        <button type="button" className={`${styles.containerButton} ${categoryIndex === 2 ? styles.containerButtonActive : ""}`} onClick={() => handleIndex(2)}>Shop By Category</button>
        <button type="button" className={`${styles.containerButton} ${categoryIndex === 3 ? styles.containerButtonActive : ""}`} onClick={() => handleIndex(3)}>Shop By Style</button>
      </div>
    </div>
  );
}