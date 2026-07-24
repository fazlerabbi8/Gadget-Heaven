import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto p-6">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default MainLayout;