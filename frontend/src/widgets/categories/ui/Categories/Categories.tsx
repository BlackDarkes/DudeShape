import { Container } from "@/shared/ui/Container/Container";
import { CategoriesTitle } from "../CategoriesTitle/CategoriesTitle";
import { CategoriesSelector } from "../CategoriesSelector/CategoriesSelector";

export const Categories = () => {
  return (
    <section>
      <Container>
        <CategoriesTitle />

        <CategoriesSelector />
      </Container>
    </section>
  );
}