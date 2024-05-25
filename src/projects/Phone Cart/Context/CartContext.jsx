import { createContext, useContext, useEffect, useReducer } from "react";
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
  function increase(id) {
    dispatch({ type: "INCREASE", payload: id });
  }
  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });
  }
  useEffect(() => {
    dispatch({ type: "TOTAL_ITEMS" });
  }, [state.cart]);
  return (
    <GlobalContext.Provider
      value={{ ...state, clearCart, removeItem, increase, decrease }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);
export { CartContext, useGlobalContext };
