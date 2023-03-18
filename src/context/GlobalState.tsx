import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/url";
import { CartItem, GlobalContext, Restaurant } from "./GlobalContext";

interface ApiResponse {
  restaurant: Restaurant;
}

type ChildrenProps = {
  children: React.ReactNode;
};

type ProductProps = {
  id: string;
};

interface NewCartItem extends CartItem {
  quantity: number;
}

const GlobalState = ({ children }: ChildrenProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(
    undefined
  );
  const [cart, setCart] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<string | null>(null);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      const newRestaurant = response.data.restaurant;
      if (newRestaurant != null) {
        setRestaurant(newRestaurant);
      }
    } catch (err) {
      console.error("An error occurred while trying to get restaurants");
    }
  };
  const addToCart = (
    product: ProductProps,
    quantity: number,
    newRestaurant: Restaurant
  ): void => {
    const index = cart?.findIndex((item) => item.id === product.id);
    if (index !== undefined && index >= 0) {
      const updatedCart = [...(cart as CartItem[])];
      updatedCart[index].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newCartItem: NewCartItem = {
        ...product,
        quantity,
        price: 0,
        product: "",
      };
      setCart([...(cart || []), newCartItem]);
    }
    if (restaurant === undefined || restaurant.id !== newRestaurant.id) {
      setRestaurant(newRestaurant);
    }
  };

  const removeToCart = (id: string): void => {
    if (cart !== null) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const states = { restaurant, cart: cart ?? [], order };
  const requests = { addToCart, removeToCart };
  const setters = { setRestaurant, setCart, setOrder };
  const values = { states, requests, setters };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
