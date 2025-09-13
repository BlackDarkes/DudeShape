"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddSubscribe } from "../../api/addSubscribe";
import z from "zod";
import IconArrow from "../../assets/arrow.svg";
import styles from './FooterFormSubscribe.module.scss'

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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
        <input type="email" className={styles.containerInput} {...register("email")} placeholder="Email Address" />
        <button type="submit" className={styles.containerButton}>
          <IconArrow />
        </button>
      </form>

      { errors.email && <span className={styles.containerError}>{ errors.email?.message }</span> }
    </div>
  );
}