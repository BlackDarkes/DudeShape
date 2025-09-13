"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import { useAddSubscribe } from "../../api/addSubscribe";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import IconEnvelope from "../../assets/input.svg";
import styles from './FormSubscribe.module.scss'
import { Button } from "@/shared/ui";

interface IFormSubscribe {
  email: string;
}

const emailScheme = z.object({
  email: z.email("Введите корректный email!"),
});

export const FormSubscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormSubscribe>({
    resolver: zodResolver(emailScheme),
  });

  const mutation = useAddSubscribe();

  const onSubmit: SubmitHandler<IFormSubscribe> = ({
    email,
  }: IFormSubscribe) => {
    mutation.mutate(email);
    reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
        <div className={styles.containerContainerInput}>
          <IconEnvelope className={styles.containerInputIcon} />
          <input type="email" className={styles.containerInput} {...register("email")} placeholder="Enter your email" />
        </div>

        <Button type="submit" ariaLabel="Register" className={styles.containerButton}>Register</Button>
      </form>

      <span className={styles.containerError}>{errors.email && (errors.email?.message)}</span>
    </div>
  );
};
