import { Store } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";

interface QueryProviderProps {
  children: React.ReactNode;
  queryClientState: QueryClient;
  store: Store;
}

export const StoreProvider = ({
  children,
  queryClientState,
  store,
}: QueryProviderProps) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClientState}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};
