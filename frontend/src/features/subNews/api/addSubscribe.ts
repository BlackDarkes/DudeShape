"use client"

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAddSubscribe = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const response = await axios.post("/api/sub-news", { email }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
  });
};
