import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react"

export const queryWrappedRender = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}