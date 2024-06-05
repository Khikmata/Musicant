import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { queryClientConfig } from "./config/queryClient";
import { Router } from "./navigation/Router";
import { StoreProvider } from "./providers/StoreProvider";
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
