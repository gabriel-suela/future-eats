import { createContext, useContext } from "react";

export const GlobalContext = createContext({
  states: {
    restaurant: {}, // Set your default values for restaurant and cart if needed
    cart: [],
  },
  setters: {
    setRestaurant: {},
    setCart: {},
  },
});

export const useGlobal = () => useContext(GlobalContext);
