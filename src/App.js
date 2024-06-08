import React from "react";
import { RouterProvider } from "react-router-dom";
import { ServiceProvider } from "./contexts/ServiceContext";
import router from "./router/router";
import "./css/index.css";

const defaultUserList = [
  {
    id: 1,
    addr: [
      {
        name: "dyh",
        address: "beijing",
      },
      {
        name: "dyh",
        address: "shanghai",
      },
    ],
    phone: "12345678901",
    name: "dyh",
    password: "123456",
    cart: [
      { id: 1, amount: 2 },
      { id: 2, amount: 1 },
    ],
  },
  {
    id: 2,
    addr: [
      {
        name: "dyh",
        address: "beijing",
      },
    ],
    phone: "12345678901",
    name: "dyh2",
    password: "654321",
    cart: [
      { id: 1, amount: 2 },
      { id: 2, amount: 1 },
    ],
  },
];

const App = () => {
  localStorage.setItem("userList", JSON.stringify(defaultUserList));

  return (
    <ServiceProvider>
      <RouterProvider router={router} />
    </ServiceProvider>
  );
};

export default App;
