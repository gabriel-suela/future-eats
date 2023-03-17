import { createContext, useContext } from "react";

interface CartItem {
  quantity: number;
  id: string;
}

interface Restaurant {
  img: string;
  name: string;
  deliveryTime: number;
  id: string;
  shipping: number;
}

interface ContextProps {
  setters: {
    setCart: React.Dispatch<React.SetStateAction<CartItem[] | null>>;
    setRestaurant: React.Dispatch<React.SetStateAction<Restaurant | undefined>>;
  };
  states: {
    cart: CartItem[] | null;
    restaurant: Restaurant | undefined;
  };
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const useGlobal = () => useContext(GlobalContext);
