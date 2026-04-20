import React from "react";
import ReactDOM from "react-dom/client";
import { AppProviders } from "./app/providers";
import { AuthProvider } from "./features/auth/store/AuthProvider";
import App from "./app/App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <AuthProvider>
      <App />
      </AuthProvider>
    </AppProviders>
  </React.StrictMode>
);