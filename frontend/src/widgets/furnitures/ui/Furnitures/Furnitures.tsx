"use client"

import { Container } from "@/shared/ui/Container/Container";
import { FurnituresList } from "../FurnituresList/FurnituresList";
import { FurnituresTitle } from "../FurnituresTitle/FurnituresTitle";
import { useScroll } from "@/entities/furniture";

export const Furnitures = () => {
  const { scrollNext, scrollPreview, scrollRef } = useScroll();

  return (
    <section>
      <Container>
        <FurnituresTitle scrollNext={scrollNext} scrollPreview={scrollPreview} />

        <FurnituresList scrollRef={scrollRef} />
      </Container>
    </section>
  );
}