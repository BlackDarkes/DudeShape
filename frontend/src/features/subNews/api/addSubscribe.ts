"use client"

import { api } from "@/lib/interceptor";
import { useMutation } from "@tanstack/react-query";

export const useAddSubscribe = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const response = await api.post("/sub-news", { email }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
  });
};
