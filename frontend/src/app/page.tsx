import { Companies } from "@/widgets/companies/ui/Companies/Companies";
import { Header } from "@/widgets/header/ui/Header/Header";
import { Hero } from "@/widgets/hero/ui/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
    </>
  );
}
