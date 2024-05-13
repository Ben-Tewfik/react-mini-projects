import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

export default function AppContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    return setShowModal(true);
  }
  function closeModal() {
    return setShowModal(false);
  }
  const value = { showModal, openModal, closeModal };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
