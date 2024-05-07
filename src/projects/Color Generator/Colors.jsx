import React, { useState } from "react";
import "./style/colors.css";
export default function Colors() {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(color);
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
      <section className="colors-section"></section>
    </main>
  );
}