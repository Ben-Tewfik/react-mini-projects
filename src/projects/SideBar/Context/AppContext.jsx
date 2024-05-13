import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

export default function AppContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  function openModal() {
    return setShowModal(true);
  }
  function closeModal() {
    return setShowModal(false);
  }
  function openSidebar() {
    return setShowSidebar(true);
  }
  function closeSidebar() {
    return setShowSidebar(false);
  }
  const value = {
    showModal,
    openModal,
    closeModal,
    showSidebar,
    openSidebar,
    closeSidebar,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
