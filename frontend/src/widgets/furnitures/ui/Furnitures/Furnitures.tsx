import { Container } from "@/shared/ui/Container/Container";
import { FurnituresList } from "../FurnituresList/FurnituresList";
import { FurnituresTitle } from "../FurnituresTitle/FurnituresTitle";

export const Furnitures = () => {
  return (
    <section>
      <Container>
        <FurnituresTitle />

        <FurnituresList />
      </Container>
    </section>
  );
}