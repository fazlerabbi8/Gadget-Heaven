import { Outlet, useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Products from "../components/Products/Products";

const Home = () => {
  const products = useLoaderData();
  console.log(products)
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="mt-20">
        <Products products = {products}></Products>
      </div>
    </div>
  );
};

export default Home;
