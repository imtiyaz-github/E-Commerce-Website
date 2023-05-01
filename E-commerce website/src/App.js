import React, { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Product from "./component/product/Product";
import Cart from "./component/cart/Cart";
import Login from "./component/login/Login";



const  App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) return;
    const newCartItems = [...cartItems];
    if (newCartItems[itemIndex].quantity === 1) {
      newCartItems.splice(itemIndex, 1);
    } else {
      newCartItems[itemIndex].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <>
          <Product addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
