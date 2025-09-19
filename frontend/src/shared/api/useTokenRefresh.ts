"use client"

import { useStore } from "@/app/store/store"
import { api } from "@/lib/interceptor";
import { useEffect } from "react";

export const useTokenRefresh = () => {
  const { setUser } = useStore();

  useEffect(() => {
    const refreshSession = async () => {
      try {
        const { data } = await api.post("/auth/refresh");
        setUser(data.user);
        console.log("Token update")
      } catch {
        setUser(null);
        console.log("Error data bad")
      }
    };
    refreshSession();
  }, [setUser])
}