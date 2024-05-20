import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function StrapiContext({ children }) {
  const [sidebar, setSidebar] = useState(false);
  function openSidebar() {
    setSidebar(true);
  }
  function closeSidebar() {
    setSidebar(false);
  }
  return (
    <GlobalContext.Provider value={{ sidebar, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
