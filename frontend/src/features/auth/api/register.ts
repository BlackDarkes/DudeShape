"use client"

import { Register, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: Register) => {
      const response = await axios.post(
        "/api/register",
        { data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
  });
};
