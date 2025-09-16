"use client"

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IRegister } from "../types/register.interface";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: IRegister) => {
      const response = await axios.post(
        "/api/auth/register",
        { email: data.email, password: data.password, name: data.name },
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
