import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import router from "./routes/Router";
import { ShopProvider } from "./Context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <RouterProvider router={router} />
  </ShopProvider>
);