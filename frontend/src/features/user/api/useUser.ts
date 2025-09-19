"use client"

import { useStore } from "@/app/store/store"
import { api } from "@/lib/interceptor"
import { useQuery } from "@tanstack/react-query"

export const useUser = () => {
  const { user } = useStore();

  return useQuery({
    queryKey: [`user${user?.id}`, user?.id],
    queryFn: async () => {
      const response = await api.get(`/user/${user?.id}`);
      return response.data;
    }
  })
}