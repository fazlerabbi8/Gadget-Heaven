import { useShop } from "../Context/ShopContext";

const Wishlist = () => {
  const { wishlist, removeFromWishList } = useShop();

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Wishlist</h2>

        {wishlist.length === 0 ? (
          <p>Wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div
              key={product.product_title}
              className="flex justify-between items-center border p-4 rounded-lg mb-3"
            >
              <div className="flex gap-4">
                <img
                  src={product.product_image}
                  className="w-20 h-20 rounded-lg"
                />

                <div>
                  <h3 className="font-bold">{product.product_title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromWishList(product.product_title)}
                className="btn btn-circle btn-error btn-outline"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;