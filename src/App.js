import React from "react";
import { RouterProvider } from "react-router-dom";
import { ServiceProvider } from "./contexts/ServiceContext";
import router from "./router/router";
import "./css/index.css";

const App = () => {
  return (
    <ServiceProvider>
      <RouterProvider router={router} />
    </ServiceProvider>
  );
};

export default App;
