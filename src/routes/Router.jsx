import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
  },
]);

export default router;