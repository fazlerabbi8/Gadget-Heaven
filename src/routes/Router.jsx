import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Cart from "../components/Cart";
import WishList from "../components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/product/:product_title",
        Component: ProductDetails,
        loader: async ({ params }) => {
          const res = await fetch("/products.json");
          const products = await res.json();

          return products.find(
            (product) => product.product_title === params.product_title,
          );
        },
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path:"/statistics",
        Component:Statistics,
        loader: () => fetch("/products.json")
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/wishlist",
        Component: WishList,
      },
    ],
  },
  {
    path: "*",
    element:<ErrorPage></ErrorPage>
  },
]);

export default router;
