import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { appAxiosInstance } from "./api/axios";
import { setUpApiRequestInterceptors } from "./api/interceptors";
import { queryClientConfig } from "./config/queryClient";
import { Router } from "./navigation/Router";
import { AuthData } from "./providers/AuthData";
import { StoreProvider } from "./providers/StoreProvider";
import { store } from "./store/store";

function App() {
  const [queryClient] = React.useState(
    () => new QueryClient({ ...queryClientConfig })
  );

  setUpApiRequestInterceptors(appAxiosInstance);

  return (
    <StoreProvider queryClientState={queryClient} store={store}>
      <AuthData>
        <Router />
      </AuthData>
    </StoreProvider>
  );
}

export default App;
