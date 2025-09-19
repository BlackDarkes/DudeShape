"use client"

import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../types/login.interface";
import { api } from "@/lib/interceptor";
import { useStore } from "@/app/store/store";

export const useLogin = () => {
  const { setUser, setMessage, handleFlashModal } = useStore();

  return useMutation({
    mutationFn: async (data: ILogin) => {
      const response = await api.post(
        "/auth/login",
        { email: data.email, password: data.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data?.message);
      setUser(data?.user);
      handleFlashModal();
    }
  });
};
