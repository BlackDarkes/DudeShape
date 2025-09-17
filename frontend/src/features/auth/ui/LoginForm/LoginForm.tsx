"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLogin } from "../../api/login";
import { ILogin } from "../../types/login.interface";
import { useStore } from "@/app/store/store";
import styles from './LoginForm.module.scss'

const loginScheme = z.object({
  email: z.email(),
  password: z.string().min(5),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    resolver: zodResolver(loginScheme),
  });

  const { mutate } = useLogin();

  const { handleType, handleModalOpen } = useStore();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
    reset();
    handleModalOpen();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.formTitle}>Authorization:</h2>

      <div>
        <div className={styles.formInputContainer}>
          <input type="email" className={styles.formInput} {...register("email")} placeholder="email..." />
          {errors.email && <span>{errors?.email.message}</span>}
        </div>
        <div className={styles.formInputContainer}>
          <input type="password" className={styles.formInput} {...register("password")} placeholder="password..." />
          {errors.password && <span>{errors?.password.message}</span>}
        </div>
        <button type="button" onClick={() => handleType("register")} className={styles.formSwap}>go to register</button>
      </div>

      <button type="submit" className={styles.formSubmit}>Login</button>
    </form>
  );
};
