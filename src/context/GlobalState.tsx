import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/url";
import { GlobalContext } from "./GlobalContext";

interface Restaurant {
  img: string;
  name: string;
  deliveryTime: number;
  shipping: number;
}

interface CartItem {}

interface GlobalStateObject {
  restaurant: Restaurant;
  cart: CartItem[];
}

type ChildrenProps = {
  children: React.ReactNode;
};

const GlobalState = ({ children }: ChildrenProps) => {
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([]);
  const { restaurantId } = useParams();

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

  const states = { cart, restaurant };
  const setters = { setRestaurant, setCart };
  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {children}
    </GlobalContext.Provider>
  );
};
