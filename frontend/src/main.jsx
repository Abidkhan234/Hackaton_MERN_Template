import App from "./App.jsx";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallBackUI from "./components/errors/FallBackUI.jsx";
import { UIContextProvider } from "../context/UIContext.jsx";
import queryClient from "../config/reactQuery.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          FallbackComponent={({ resetErrorBoundary, error }) => (
            <FallBackUI resetErrorBoundary={resetErrorBoundary} error={error} />
          )}
          onReset={() => window.location.reload}
        >
          <UIContextProvider>
            <App />
          </UIContextProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
