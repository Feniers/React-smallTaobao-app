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
    coupon: 3,
    avatar: "https://s3.bmp.ovh/imgs/2024/06/10/e871ee9896a2ca2c.jpg",
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
    coupon: 2,
    avatar: "https://s3.bmp.ovh/imgs/2024/06/10/ab7f159d0da00106.jpg",
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
