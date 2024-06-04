import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import OrderDetail from "../pages/OrderDetail";
import Pay from "../pages/Pay";
import PaySuccess from "../pages/PaySuccess";
import CreateOrder from "../pages/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <HomePage /> },
      { path: "/categories", element: <Categories /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/productdetail", element: <ProductDetail /> },
  { path: "/orderdetail", element: <OrderDetail /> },
  { path: "/pay", element: <Pay /> },
  { path: "/paysuccess", element: <PaySuccess /> },
  { path: "/createorder", element: <CreateOrder /> },
]);

export default router;
