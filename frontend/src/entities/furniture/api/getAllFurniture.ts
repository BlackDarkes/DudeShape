"use client"

import { api } from "@/lib/interceptor";
import type { IFurniture } from "../types/furniture.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetAllFurniture = () => {
  return useQuery<IFurniture[]>({
    queryKey: ["furniture"],
    queryFn: async () => {
      const response = await api.get("/furniture");
      return response.data;
    }
  });
}