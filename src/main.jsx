import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import authRoutes from "./Routes/AuthRoutes";
import './index.css';
// import App from "./App"



createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={authRoutes} />
  </StrictMode>
);
