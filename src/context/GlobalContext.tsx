import { createContext, useContext } from "react";

export interface CartItem {
  price: number;
  product: any;
  id: string;
  quantity: number;
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
    setOrder: React.Dispatch<React.SetStateAction<null>>;
  };
  states: {
    cart: CartItem[] | null;
    restaurant: Restaurant | undefined;
    order: any;
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
