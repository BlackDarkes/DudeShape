"use client"

import { useStore } from "@/app/store/store";
import { api } from "@/lib/interceptor";
import { useMutation } from "@tanstack/react-query";

export const useAddSubscribe = () => {
  const { setMessage, handleFlashModal } = useStore();

  return useMutation({
    mutationFn: async (email: string) => {
      const response = await api.post("/sub-news", { email }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data?.message);
      handleFlashModal();
    }
  });
};
