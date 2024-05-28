import { QueryClient } from "@tanstack/react-query";
import React from "react";
import "./App.css";
import { queryClientConfig } from "./api/config/queryClient";
import { Router } from "./navigation/Router";
import { StoreProvider } from "./shared/config/StoreProvider";
import { store } from "./store/store";

function App() {
  const [queryClient] = React.useState(
    () => new QueryClient({ ...queryClientConfig })
  );

  return (
    <StoreProvider queryClientState={queryClient} store={store}>
      <Router />
    </StoreProvider>
  );
}

export default App;
