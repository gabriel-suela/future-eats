import { createContext, useContext } from "react";

export interface CartItem {
  quantity: number;
  id: string;
}

export interface Restaurant {
  img: string;
  name: string;
  deliveryTime: number;
  id: string;
  shipping: number;
  logoUrl: string;
  category: string;
  address: string;
  restaurant: any;
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
  requests: {
    addToCart: (
      cartItem: CartItem,
      quantity: number,
      restaurant: Restaurant
    ) => void;
    removeToCart: (id: string) => void;
  };
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const useGlobal = () => useContext(GlobalContext);
