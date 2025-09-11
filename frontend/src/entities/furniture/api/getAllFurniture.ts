"use client"

import type { IFurniture } from "../types/furniture.interface";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllFurniture = () => {
  return useQuery<IFurniture[]>({
    queryKey: ["furniture"],
    queryFn: async () => {
      const response = await axios.get("/api/furniture");
      return response.data;
    }
  });
}