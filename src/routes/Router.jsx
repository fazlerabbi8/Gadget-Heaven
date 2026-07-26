import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import { Component } from "react";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/products.json')
      },
      {
        path: "/product/:product_title",
        Component: ProductDetails,
        loader: async ({params}) => {
          const res = await fetch("/products.json");
          const products = await res.json();

          return products.find((product) => product.product_title === (params.product_title));
        }
      }
    ],
  },
]);

export default router;
