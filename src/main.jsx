import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ActiveProvider } from "./context/ActiveContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ActiveProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ActiveProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
