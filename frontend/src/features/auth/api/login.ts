"use client"

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ILogin } from "../types/login.interface";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: ILogin) => {
      const response = await axios.post(
        "/api/login",
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
