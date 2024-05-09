import { useState } from "react";
import "./style/grocery.css";
import List from "./components/List";
export default function Grocery() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const id = new Date().getTime().toString();
    setList([...list, { title: name, id }]);
    setName("");
  }
  return (
    <main className="grocery-main-container">
      <section className="grocery-container">
        <h4 className="grocery-title">Grocery Bud</h4>
        <form className="grocery-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your item"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="grocery-btn">Add item</button>
        </form>
        <div className="list-container">
          {list.map((item, index) => {
            return <List {...item} key={index} />;
          })}
        </div>
        <button className="clear-btn">clear all</button>
      </section>
    </main>
  );
}
