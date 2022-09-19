import queryClient from "@config/queryClient";
import { useGlobalStyle } from "@styles/globalStyle";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "@routes/routes";

function App() {
  useGlobalStyle();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export { App };
