import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import { CustomerAuthProvider } from "./contexts/CustomerAuthContext";
import { OrderProvider } from "./contexts/OrderContext";
import './index.css'
import App from './App.tsx'

const helmetContext = {};

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <CustomerAuthProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CustomerAuthProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
