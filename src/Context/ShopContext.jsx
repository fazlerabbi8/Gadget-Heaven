import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({children}){
    const [cart, setCart] = useState([])
    const [wishlist, setWishList] = useState([]);

    const clearCart = () => {
        setCart([]);
    }


    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (product_title) => {
        setCart((prev) => prev.filter((p) => p.product_title !== product_title));
    };

    const addToWishList = (product) => {
        setWishList((prev) => {
            const exists = prev.some((p) => p.product_title === product.product_title);

            return exists ? prev : [...prev, product];
        });
    };

    const removeFromWishList = (product_title) => {
        setWishList((prev) => prev.filter((p) => p.product_title !== product_title));
    };

     return (
    <ShopContext.Provider
      // eslint-disable-next-line no-undef
      value={{ cart, wishlist, addToCart, removeFromCart, addToWishList, removeFromWishList,clearCart, }}
    >
      {children}
    </ShopContext.Provider>
  );

}

// eslint-disable-next-line no-undef, react-refresh/only-export-components
export const useShop = () => useContext(ShopContext);