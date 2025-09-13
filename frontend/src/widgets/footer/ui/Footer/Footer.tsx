import { FooterListItem } from "@/entities/footer";
import { Container, Logo } from "@/shared/ui";
import { tourItems } from "../../constants/tourItems";
import { ourCompanyItems } from "../../constants/ourCompanyItems";
import { ListSocial } from "../ListSocial/ListSocial";
import { FooterSubscribe } from "../FooterSubscribe/FooterSubscribe";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div>
            <Logo />
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore .
            </p>
          </div>
          <ListSocial />
        </div>
        <div>
          <FooterListItem title="Take a tour" list={tourItems} />
          <FooterListItem title="Our company" list={ourCompanyItems} />
          <FooterSubscribe />
        </div>
      </Container>
    </footer>
  );
};
