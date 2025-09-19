"ise client"

import { useStore } from "@/app/store/store"
import { api } from "@/lib/interceptor";
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  const { user } = useStore();

  return useQuery({
    queryKey: [`cart${user?.id}`, user?.id],
    queryFn: async () => {
      const response = await api.get(`/cart/${user?.id}`);
      return response.data;
    }
  })
}