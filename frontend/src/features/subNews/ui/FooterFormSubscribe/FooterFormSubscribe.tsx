"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddSubscribe } from "../../api/addSubscribe";
import z from "zod";
import IconArrow from "../../assets/arrow.svg";

interface IFormSubscribe {
  email: string;
}

const emailScheme = z.object({
  email: z.email("Введите корректный email!"),
})

export const FooterFormSubscribe = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: zodResolver(emailScheme),
  });

  const mutation = useAddSubscribe();

  const onSubmit: SubmitHandler<IFormSubscribe> = ({ email }: IFormSubscribe) => {
    mutation.mutate(email);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} placeholder="Email Address" />
        <button type="submit">
          <IconArrow />
        </button>
      </form>

      { errors.email && <span>{ errors.email?.message }</span> }
    </div>
  );
}