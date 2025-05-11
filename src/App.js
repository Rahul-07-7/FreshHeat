import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContectUs from "./Components/ContectUs";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Loader from "./Components/Loader";

const RouteHandler = ({
  cartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
}) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Loader duration on each route change
    return () => clearTimeout(timer);
  }, [location]);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contect" element={<ContectUs />} />
      <Route
        path="/menu"
        element={
          <Shop
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartItemQuantity={updateCartItemQuantity}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateCartItemQuantity={updateCartItemQuantity}
            clearCart={clearCart}
          />
        }
      />
    </Routes>
  );
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === product.title);
      if (existing) {
        return prev.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (index, updatedItem) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = updatedItem;
    setCartItems(newCartItems);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCartItems([]);

  return (
    <BrowserRouter>
      <RouteHandler
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
        clearCart={clearCart}
      />
    </BrowserRouter>
  );
}

export default App;
