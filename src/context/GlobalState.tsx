import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

type ChildrenProps = {
  children: React.ReactNode;
};

const GlobalState = ({ children }: ChildrenProps) => {
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([]);

  const states = { cart, restaurant };
  const setters = { setRestaurant, setCart };
  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {children}
    </GlobalContext.Provider>
  );
};
