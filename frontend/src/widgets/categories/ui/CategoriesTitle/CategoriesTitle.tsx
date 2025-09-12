import styles from './CategoriesTitle.module.scss'

export const CategoriesTitle = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>All Furniture</h1>

      <div className={styles.containerButtons}>
        <button type="button" className={styles.containerButton}>Shop By Room</button>
        <button type="button" className={styles.containerButton}>Shop By Category</button>
        <button type="button" className={styles.containerButton}>Shop By Style</button>
      </div>
    </div>
  );
}