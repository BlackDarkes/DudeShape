"use client"

import { api } from "@/lib/interceptor"
import { useQuery } from "@tanstack/react-query"

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`furniture/${id}`);
      return response.data;
    }
  })
}