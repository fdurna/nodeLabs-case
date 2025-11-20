import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { message } from "antd";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      const backendMessage = error?.response?.data?.message;
      message.error(backendMessage || "Bir hata oluştu");
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      const backendMessage = error?.response?.data?.message;
      message.error(backendMessage || "İşlem sırasında bir hata oluştu");
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
