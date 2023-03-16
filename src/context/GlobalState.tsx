import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([]);


  const states = {cart, restaurant}
  const setters = {setRestaurant, setCart}
  return (
    <GlobalContext.Provider value={{states, setters}}
    {children}
    </GlobalContext.Provider>
  )
};
