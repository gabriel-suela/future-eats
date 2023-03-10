import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [order, setOrder] = useState(null);

  const addToCart = (product, quantity, newRestaurant) => {
    console.log(restaurant);
    if (newRestaurant.id === restaurant.id) {
      setCart([{ ...product, quantity }]);
    } else {
      setCart([...cart, { ...product, quantity }]);
      setRestaurant(newRestaurant);
    }
  };
  const removeToCart = (id) => {
    const index = cart.findIndex((prod) => prod.id === id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const states = { cart, restaurant, order };
  const requests = { addToCart, removeToCart };
  const setters = { setOrder, setCart };

  console.log(restaurant);

  return (
    <GlobalContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
