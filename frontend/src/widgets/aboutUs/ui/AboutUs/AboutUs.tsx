import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import { AboutInfo } from "../AboutInfo/AboutInfo";
import styles from './AboutUs.module.scss'

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <Container className={styles.aboutUsContainer}>
        <div className={styles.aboutUsImage}>
          <Image src={"/aboutUs/furniture.png"} alt="furniture" width={596} height={577} />
        </div>

        <AboutInfo />
      </Container>
    </section>
  );
}