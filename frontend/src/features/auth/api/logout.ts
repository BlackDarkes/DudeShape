import { api } from "@/lib/interceptor"
import { useMutation } from "@tanstack/react-query"

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await api.post("/auth/logout");
      return response.data;
    }
  })
}