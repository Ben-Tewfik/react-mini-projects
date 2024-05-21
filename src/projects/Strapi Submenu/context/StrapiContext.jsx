import { createContext, useContext, useState } from "react";
import sublinks from "../../../utils/StrapiData";

const GlobalContext = createContext();

export default function StrapiContext({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [page, setPage] = useState({ page: "", link: [] });
  const [location, setLocation] = useState({});
  function openSidebar() {
    setSidebar(true);
  }
  function closeSidebar() {
    setSidebar(false);
  }
  function showSubmenu(text, coordinates) {
    setPage(sublinks.find(item => item.page === text));
    setLocation(coordinates);
    setSubmenu(true);
  }
  function hideSubmenu() {
    setSubmenu(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        submenu,
        showSubmenu,
        hideSubmenu,
        page,
        location,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
