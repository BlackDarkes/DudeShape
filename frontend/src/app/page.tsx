import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Companies } from "@/widgets/companies";
import { AboutUs } from "@/widgets/aboutUs";
import { Furnitures } from "@/widgets/furnitures";
import { Categories } from "@/widgets/categories";
import { Feedback } from "@/widgets/feedback";
import { Subscribe } from "@/widgets/subscribe";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <AboutUs />
        <Furnitures />
        <Categories />
        <Feedback />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
