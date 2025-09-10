import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Companies } from "@/widgets/companies";
import { AboutUs } from "@/widgets/aboutUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <AboutUs/>
    </>
  );
}
