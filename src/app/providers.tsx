"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster 
        position="top-right"
        richColors
      />
    </main>
  );
}
