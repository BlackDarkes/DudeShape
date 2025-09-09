import { Container } from "@/shared/ui/Container/Container";
import { CompaniesList } from "../CompaniesList/CompaniesList";

export const Companies = () => {
  return (
    <section>
      <Container>
        <h1>Trusted by 20,000+ companies</h1>

        <CompaniesList />
      </Container>
    </section>
  );
}