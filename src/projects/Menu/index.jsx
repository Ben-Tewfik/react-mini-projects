import "./style/menu.css";
import list from "../../utils/menuData";
console.log(list);
import { useState } from "react";
export default function Index() {
  const [menu, setMenu] = useState(list);
  let categories = ["all", ...new Set(list.map(meal => meal.category))];
  console.log(categories);
  return (
    <main className="main-menu">
      <div className="menu-title-container">
        <h2 className="menu-title">our menu</h2>
        <div className="menu-underline"></div>
      </div>
      <div className="category-container">
        {categories.map(category => {
          return <button key={category}>{category}</button>;
        })}
      </div>
      <section className="menu-container">
        {menu.map(item => {
          const { category, desc, id, img, price, title } = item;
          return (
            <article key={id} className="menu-item-container">
              <img src={img} alt={title} />
              <div className="desc-container">
                <div className="desc-title-container">
                  <h2 className="desc-title">{title}</h2>
                  <p className="desc-price">${price}</p>
                </div>
                <p className="description">{desc}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
