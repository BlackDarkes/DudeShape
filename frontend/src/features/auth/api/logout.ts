"use client"

import { useStore } from "@/app/store/store"
import { api } from "@/lib/interceptor"
import { useMutation } from "@tanstack/react-query"

export const useLogout = () => {
  const { setMessage, handleFlashModal } = useStore();

  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/auth/logout");
      return response.data;
    },
    onSuccess: (data) => {
      setMessage(data?.message);
      handleFlashModal();
    }
  })
}