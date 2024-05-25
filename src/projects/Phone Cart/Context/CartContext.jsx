import { createContext, useContext, useReducer } from "react";
import reducer from "../components/functions/reducer";
import { cartItems } from "../../../utils/cartData";

const GlobalContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
};

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  return (
    <GlobalContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);
export { CartContext, useGlobalContext };
