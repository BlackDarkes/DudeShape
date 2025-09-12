import { Container } from "@/shared/ui/Container/Container";
import { CategoriesTitle } from "../CategoriesTitle/CategoriesTitle";
import { CategoriesSelector } from "../CategoriesSelector/CategoriesSelector";
import styles from './Categories.module.scss'

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <Container className={styles.categoriesContainer}>
        <CategoriesTitle />

        <CategoriesSelector />
      </Container>
    </section>
  );
}