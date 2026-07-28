import { useState } from "react";
import { useShop } from "../Context/ShopContext";
import Modal from "../components/Modal";

const Cart = () => {
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const { cart, removeFromCart, clearCart } = useShop();

  const totalCost = cart.reduce((sum, p) => sum + Number(p.price), 0);

  const displayProducts = isSorted
    ? [...cart].sort((a, b) => b.price - a.price)
    : cart;

  const handleSort = () => {
    setIsSorted(true);
  };

  const handlePurchase = () => {
    if (cart.length === 0) return;

    clearCart();
    setMessage("Your purchase was completed successfully!");
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="border border-blue-500 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Cart</h2>

          <div className="flex gap-4 items-center">
            <span>Total Cost: ${totalCost}</span>

            <button
              onClick={handleSort}
              className="btn btn-outline btn-sm"
            >
              Sort by Price
            </button>

            <button
              onClick={handlePurchase}
              className="btn btn-primary btn-sm"
              disabled={cart.length === 0}
            >
              Purchase
            </button>
          </div>
        </div>

        {displayProducts.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          displayProducts.map((product) => (
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
                  <p>${product.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(product.product_title)}
                className="btn btn-circle btn-error btn-outline"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <Modal
        message={message}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Cart;