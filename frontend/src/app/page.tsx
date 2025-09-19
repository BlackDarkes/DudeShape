"use client"

import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Companies } from "@/widgets/companies";
import { AboutUs } from "@/widgets/aboutUs";
import { Furnitures } from "@/widgets/furnitures";
import { Categories } from "@/widgets/categories";
import { Feedback } from "@/widgets/feedback";
import { Subscribe } from "@/widgets/subscribe";
import { Footer } from "@/widgets/footer";
import { ModalForm } from "@/widgets/authForm";
import { useTokenRefresh } from "@/shared/api/useTokenRefresh";
import { FlashMessage } from "@/widgets/flashMessage";

export default function Home() {
  useTokenRefresh();

  return (
    <>
      <Header />
      <ModalForm />
      <FlashMessage />
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
