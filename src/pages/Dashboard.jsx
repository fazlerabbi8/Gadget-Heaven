import { useState } from "react";
import { useShop } from "../Context/ShopContext";
import Modal from "../components/Modal";

function Dashboard() {

  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);


  const handlePurchase = () =>{
    if(cart.length === 0){
      return;
    }

    clearCart();

    setMessage("Your purchase was completed successfully!");

    setShowModal(true);
  }

  const { cart, wishlist, removeFromCart, removeFromWishList,clearCart } = useShop();
  const totalCost = cart.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Banner */}
      <div className="bg-purple-600 text-white text-center py-12 rounded-xl mb-10">
        <h1 className="text-4xl font-bold mb-3">Dashboard</h1>
        <p className="max-w-xl mx-auto opacity-90">
          Explore the latest gadgets that will take your experience to the next level.
        </p>
      </div>

      {/* Cart section */}
      <div className="border border-blue-400 rounded-xl p-6 mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Cart</h2>
          <div className="flex items-center gap-4">
            <span className="font-bold">Total cost: {totalCost}</span>
            <button className="btn btn-outline btn-sm rounded-full">Sort by Price</button>
            <button onClick={handlePurchase} className="btn btn-primary btn-sm rounded-full">Purchase</button>
          </div>
        </div>

        {cart.length === 0 && <p className="text-gray-400">Cart is empty.</p>}

        {cart.map((product) => (
          <div
            key={product.product_title}
            className="flex items-center justify-between border border-gray-500 py-6"
          >
            <div className="flex gap-4 items-center">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-20 h-20 object-cover rounded-lg bg-gray-100"
              />
              <div>
                <h3 className="font-bold">{product.product_title}</h3>
                <p className="text-sm text-gray-500 max-w-md">{product.description}</p>
                <p className="text-sm mt-1">
                  Price: <span className="font-semibold">${product.price}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(product.product_title)}
              className="text-red-500 border border-red-300 mr-3 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-50"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Wishlist section */}
      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Wishlist</h2>

        {wishlist.length === 0 && <p className="text-gray-400">Wishlist is empty.</p>}

        {wishlist.map((product) => (
          <div
            key={product.product_title}
            className="flex items-center justify-between border border-gray-500 py-4"
          >
            <div className="flex gap-4 items-center">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-20 h-20 object-cover rounded-lg bg-gray-100"
              />
              <h3 className="font-bold">{product.product_title}</h3>
            </div>
            <button
              onClick={() => removeFromWishList(product.product_title)}
              className="text-red-500 border border-red-300 rounded-full mr-3 w-8 h-8 flex items-center justify-center hover:bg-red-50"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <Modal
        message={message}
        showModal = {showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default Dashboard;