"use client"

import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../types/register.interface";
import { api } from "@/lib/interceptor";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: IRegister) => {
      const response = await api.post(
        "auth/register",
        { email: data.email, password: data.password, name: data.name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });
};
