"use client";

import z from "zod";
import { useRegister } from "../../api/register";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegister } from "../../types/register.interface";

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

  const onSubmit: SubmitHandler<IRegister> = (data) => {
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
      </div>
    </form>
  );
};
