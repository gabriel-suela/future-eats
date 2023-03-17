import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/url";
import { GlobalContext } from "./GlobalContext";

interface Restaurant {
  logoUrl: string;
  id: string;
  name: string;

  category: string;
  deliveryTime: number;
  shipping: number;
  address: string;
  restaurant: any;
}
interface ApiResponse {
  restaurant: Restaurant;
}
interface CartItem {
  quantity: number;
  id: string;
}

type ChildrenProps = {
  children: React.ReactNode;
};

type ProductProps = {
  id: string;
};

const GlobalState = ({ children }: ChildrenProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [cart, setCart] = useState<CartItem[] | null>(null);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      setRestaurant(response.data.restaurant);
      console.log(restaurant);
    } catch (err) {
      console.error("An error occurred while trying to get restaurants");
    }
  };
  const addToCart = (
    product: ProductProps,
    quantity: number,
    newRestaurant: Restaurant
  ) => {
    if (newRestaurant.id === restaurant?.id) {
      setCart([{ ...product, quantity }]);
    } else {
      setCart([
        ...(cart || []), // <-- checks for cart being a falsy value and treats it as an empty array; equivalent to 'cart ? [...cart] : []'
        { ...product, quantity },
      ]);
      setRestaurant(newRestaurant);
    }
  };

  const removeToCart = (id: string): void => {
    if (cart) {
      const index = cart.findIndex((prod) => prod.id === id);
      if (index >= 0) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      }
    }
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);
  const states = { restaurant, cart };
  const requests = { addToCart, removeToCart };
  const setters = { setRestaurant, setCart };
  return (
    <GlobalContext.Provider value={{ setters, states, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
