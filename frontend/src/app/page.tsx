import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Companies } from "@/widgets/companies";
import { AboutUs } from "@/widgets/aboutUs";
import { Furnitures } from "@/widgets/furnitures";
import { Categories } from "@/widgets/categories";
import { Feedback } from "@/widgets/feedback";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <AboutUs/>
      <Furnitures />
      <Categories />
      <Feedback />
    </>
  );
}
