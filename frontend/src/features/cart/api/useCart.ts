"ise client"

import { api } from "@/lib/interceptor";
import { useQuery } from "@tanstack/react-query";
import { ICart } from "../types/cart.interface";

export const useCart = (id: string | undefined) => {
  return useQuery<ICart[]>({
    queryKey: [`cart${id}`, id],
    queryFn: async () => {
      const response = await api.get<ICart[]>(`/cart/${id}`);
      return response.data;
    },
    enabled: !!id,
  })
}