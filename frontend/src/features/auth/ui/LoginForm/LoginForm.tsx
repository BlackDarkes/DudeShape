"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLogin } from "../../api/login";
import { ILogin } from "../../types/login.interface";
import { useStore } from "@/app/store/store";

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

  const { handleType } = useStore();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors?.email.message}</span>}
        </div>
        <div>
          <input type="password" {...register("password")} />
          {errors.password && <span>{errors?.password.message}</span>}
        </div>
        <button type="button" onClick={() => handleType("register")}>go to register</button>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
