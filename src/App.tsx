import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { Router } from "./navigation/Router";
import { store } from "./store/store";
import { StoreProvider } from "./utils/config/StoreProvider";
import { queryClientConfig } from "./utils/config/queryClient";

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
