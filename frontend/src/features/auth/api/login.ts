"use client"

import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../types/login.interface";
import { api } from "@/lib/interceptor";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: ILogin) => {
      const response = await api.post(
        "auth/login",
        { email: data.email, password: data.password },
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
