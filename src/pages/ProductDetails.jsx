import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl w-full"
        />

        <div>
          <h1 className="text-4xl font-bold">{product_title}</h1>

          <p className="text-xl mt-4">Price: ${price}</p>

          <div className="mt-4">
            <button className="btn btn-soft bg-green-200 rounded-2xl">
              In srocks
            </button>
          </div>

          <p className="mt-4">{description}</p>

          <p className="mt-4">Availability: {availability}</p>

          <p>Rating: {rating}</p>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name={`rating-${product.product_id}`}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={star === Math.round(rating)}
                readOnly
              />
            ))}
          </div>

          <h3 className="font-bold mt-5">Specifications</h3>

          <ul className="list-disc ml-6 mt-2">
            {specification.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 flex gap-10">
            <button className="btn btn-warning">Add to cart</button>
            <button className="btn">
              Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-[1.2em]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
