import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto space-y-5 min-h-screen flex flex-col">
      <Navbar></Navbar>
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;