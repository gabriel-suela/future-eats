import { createContext, useContext } from "react";

export interface CartItem {
  price: number;
  product: any;
  id: string;
  quantity: number;
}

export interface Restaurant {
  name: string;
  deliveryTime: number;
  id: string;
  shipping: number;
  logoUrl: string;
  category: string;
  address: string;
  restaurant: any;
}

interface ContextProps {}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const useGlobal = () => useContext(GlobalContext);
