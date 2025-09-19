"use client"

import { useMutation } from "@tanstack/react-query";
import { IRegister } from "../types/register.interface";
import { api } from "@/lib/interceptor";
import { useStore } from "@/app/store/store";

export const useRegister = () => {
  const { setMessage, handleFlashModal } = useStore();

  return useMutation({
    mutationFn: async (data: IRegister) => {
      const response = await api.post(
        "/auth/register",
        { email: data.email, password: data.password, name: data.name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data?.message);
      handleFlashModal();
    }
  });
};
