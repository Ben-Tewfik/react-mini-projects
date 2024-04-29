import "./style/menu.css";
import list from "../../utils/menuData";
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
let categories = ["all", ...new Set(list.map(meal => meal.category))];
export default function Index() {
  const [menu, setMenu] = useState(list);
  function handleClick(category) {
    if (category === "all") {
      setMenu(list);
      return;
    }
    const filteredMenu = list.filter(item => item.category === category);
    setMenu(filteredMenu);
  }
  return (
    <main className="main-menu">
      <div className="menu-title-container">
        <h2 className="menu-title">our menu</h2>
        <div className="menu-underline"></div>
      </div>
      <Categories handleClick={handleClick} categories={categories} />
      <Menu menu={menu} />
    </main>
  );
}
