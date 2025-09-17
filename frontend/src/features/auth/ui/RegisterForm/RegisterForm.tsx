"use client";

import z from "zod";
import { useRegister } from "../../api/register";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegister } from "../../types/register.interface";
import { useStore } from "@/app/store/store";
import styles from './RegisterForm.module.scss'

const registerScheme = z.object({
  email: z.email(),
  password: z.string().min(6),
  name: z.string().min(2),
});

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerScheme),
  });

  const { mutate } = useRegister();

  const { handleType, handleModalOpen } = useStore();

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    mutate(data);
    reset();
    handleModalOpen();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.formTitle}>Registration:</h2>

      <div>
        <div className={styles.formInputContainer}>
          <input type="email" className={styles.formInput} {...register("email")} placeholder="email..." />
          {errors.email && <span className={styles.formError}>{errors?.email.message}</span>}
        </div>
        <div className={styles.formInputContainer}>
          <input type="password" className={styles.formInput} {...register("password")} placeholder="password..." />
          {errors.password && <span className={styles.formError}>{errors?.password.message}</span>}
        </div>
        <div>
          <input type="text" className={styles.formInput} {...register("name")} placeholder="name..." />
          {errors.name && <span className={styles.formError}>{errors?.name.message}</span>}
        </div>
        <button type="button" onClick={() => handleType("login")} className={styles.formSwap}>go to login</button>
      </div>

      <button type="submit" className={styles.formSubmit}>Register</button>
    </form>
  );
};
