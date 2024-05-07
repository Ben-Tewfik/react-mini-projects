import Values from "values.js";
import { useState } from "react";
import SingleColor from "./components/SingleColor";
import "./style/colors.css";
export default function Colors() {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="colors-main">
      <section className="colors-form-section">
        <h1>color generator</h1>
        <form onSubmit={handleSubmit} className="colors-form">
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="#F15025"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
          <button
            type="submit"
            className="colors-btn"
            style={{ backgroundColor: `${color}` }}
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors-section">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </main>
  );
}
