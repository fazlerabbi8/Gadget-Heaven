import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto p-6 space-y-5">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;