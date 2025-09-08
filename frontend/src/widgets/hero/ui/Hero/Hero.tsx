import { Container } from "@/shared/ui/Container/Container";
import { HeroInfo } from "../HeroInfo/HeroInfo";
import ImageFurniture from "@/widgets/hero/assets/furniture.png";
import Image from "next/image";
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.heroContainer}>
        <Image src={ImageFurniture} className={styles.heroImage} alt="furniture" />
        <HeroInfo />
      </Container>
    </section>
  );
};
