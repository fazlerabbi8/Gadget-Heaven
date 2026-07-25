const ProductCard = ({ product }) => {
  const {product_image, price,product_title } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-56 overflow-hidden">
        <img className=""className="w-full h-full object-cover"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <h2 className=" font-semibold">Price: {price} USD</h2>
        
        <div className="card-actions justify-center">
          <button className="btn btn-warning">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
