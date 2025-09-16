"use client"

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ILogin } from "../types/login.interface";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: ILogin) => {
      console.log(data)
      const response = await axios.post(
        "/api/auth/login",
        { email: data.email, password: data.password },
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
