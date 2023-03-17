import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/url";
import { GlobalContext } from "./GlobalContext";

interface Restaurant {
  img: string;
  name: string;
  deliveryTime: number;
  id: string;
  shipping: number;
}

interface CartItem {
  quantity: number;
  id: string;
}

type ChildrenProps = {
  children: React.ReactNode;
};

interface Product {
  id: string;
  name: string;
  photoUrl: string;
  quantity: number;
  description: string;
  price: number;
}

const GlobalState = ({ children }: ChildrenProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<CartItem[] | null>(null);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/restaurants`, {
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

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const setters = { setRestaurant, setCart };
  return (
    <GlobalContext.Provider value={{ setters }}>
      {children}
    </GlobalContext.Provider>
  );
};
