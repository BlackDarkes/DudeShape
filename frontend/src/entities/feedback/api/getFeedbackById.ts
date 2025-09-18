"use client"

import { api } from "@/lib/interceptor"
import { useQuery } from "@tanstack/react-query"

export const useGetFeedbackById = (id: string) => {
  return useQuery({
    queryKey: [`feedback${id}`, id],
    queryFn: async () => {
      const response = await api.get(`/feedback/${id}`);
      return response.data;
    }
  })
}