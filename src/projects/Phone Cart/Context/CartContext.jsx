import { createContext, useContext } from "react";

const globalContext = createContext();

function CartContext({ children }) {
  return <globalContext>{children}</globalContext>;
}

const useGlobalContext = () => useContext(globalContext);
export { CartContext, useGlobalContext };
