import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import ImageFurniture from "../../assets/furniture.png";
import { AboutInfo } from "../AboutInfo/AboutInfo";

export const AboutUs = () => {
  return (
    <section>
      <Container>
        <div>
          <Image src={ImageFurniture} alt="furniture" />
        </div>

        <AboutInfo />
      </Container>
    </section>
  );
}