import React, { ReactNode } from "react";
import { CartProvider } from "./contexts/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";

/** App-wide providers shared by the browser entry (main.tsx) and the prerenderer (entry-server.tsx). */
const Root = ({ children }: { children: ReactNode }) => (
  <React.StrictMode>
    <CartProvider>
      {children}
      <WhatsAppButton />
    </CartProvider>
  </React.StrictMode>
);

export default Root;
