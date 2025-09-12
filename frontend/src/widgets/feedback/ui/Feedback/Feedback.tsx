"use client"

import { Container } from "@/shared/ui/Container/Container";
import { FeedbackInfo } from "../FeedbackInfo/FeedbackInfo";
import Image from "next/image";

export const Feedback = () => {
  return (
    <section>
      <Container>
        <div>
          <Image src={"/feedback/feedback.png"} alt="feedback" width={459} height={492} />
        </div>

        <FeedbackInfo />
      </Container>
    </section>
  );
}