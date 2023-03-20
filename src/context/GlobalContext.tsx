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

type Product = {
	id: string;
	price: number;
	product: any;
};

export interface OrderP {
	restaurantName: string;
	totalPrice: number;
	price: number;
}

interface ContextProps {
	states: {
		cart: CartItem[];
		restaurant: Restaurant | undefined;
		order: OrderP | undefined;
	};
	setters: {
		setOrder: (order: OrderP | undefined) => void;
		setCart: (cart: CartItem[]) => void;
	};
	requests: {
		addToCart: (
			product: Product,
			quantity: number,
			newRestaurant: Restaurant
		) => void;
		removeToCart: (id: string) => void;
	};
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);
export const useGlobal = () => useContext(GlobalContext);
