import { Container } from "@/shared/ui/Container/Container";
import { FurnituresList } from "../FurnituresList/FurnituresList";

export const Furnitures = () => {
  return (
    <section>
      <Container>
        <div>
          <h1>Our Popular Furniture</h1>
          <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
        </div>

        <FurnituresList />
      </Container>
    </section>
  );
}