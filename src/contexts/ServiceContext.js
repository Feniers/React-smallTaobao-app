import React, { createContext } from "react";
import goodService from "../services/goodService";
import orderService from "../services/orderService";
import userService from "../services/userService";

// Create a new context
const ServiceContext = createContext();

// Create a provider component
const ServiceProvider = ({ children }) => {
  // Define the state and functions here

  const value = {
    good: goodService,
    order: orderService,
    user: userService,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
