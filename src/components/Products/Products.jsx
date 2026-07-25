import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div>
        <h2 className="text-3xl text-center font-semibold mb-10">Explore Cutting-Edge Gadgets</h2>
        <h2></h2>
      <div className="flex gap-20">
        <div className="w-1/4 ml-10">
          <Categories></Categories>
        </div>

        <div className="flex flex-wrap gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
