import { FooterListItem } from "@/entities/footer";
import { Container, Logo } from "@/shared/ui";
import { tourItems } from "../../constants/tourItems";
import { ourCompanyItems } from "../../constants/ourCompanyItems";
import { ListSocial } from "../ListSocial/ListSocial";
import { FooterSubscribe } from "../FooterSubscribe/FooterSubscribe";
import { FooterSecure } from "../FooterSecure/FooterSecure";
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerInfos}>
          <div className={styles.footerFooterTitle}>
            <div>
              <Logo className={styles.footerLogo} />
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore .
              </p>
            </div>
            <div>
              <h3 className={styles.footerTitleSocial}>Follow Us :</h3>
              <ListSocial />
            </div>
          </div>
          <div className={styles.footerLists}>
            <FooterListItem title="Take a tour" list={tourItems} />
            <FooterListItem title="Our company" list={ourCompanyItems} />
            <FooterSubscribe />
          </div>
        </div>
        <FooterSecure />
      </Container>
    </footer>
  );
};
