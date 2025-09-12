"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetFeedbackById = (id: string) => {
  return useQuery({
    queryKey: [`feedback${id}`, id],
    queryFn: async () => {
      const response = await axios.get(`/api/feedback/${id}`);
      return response.data;
    }
  })
}