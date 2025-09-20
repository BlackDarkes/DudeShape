"use client"

import { api } from "@/lib/interceptor"
import { useQuery } from "@tanstack/react-query"
import { IProduct } from "../types/product.interface"

export const useProduct = (id: string) => {
  return useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get<IProduct>(`furniture/${id}`);
      return response.data;
    }
  })
}