"use client";

import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface IQueryRouterProps {
  children: ReactNode;
}

export const QueryRouter = ({ children }: IQueryRouterProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
