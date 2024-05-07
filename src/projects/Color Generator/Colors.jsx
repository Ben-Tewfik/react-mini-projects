import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleColor from "./components/SingleColor";
import "./style/colors.css";
export default function Colors() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      toast.error(`${error}`, { position: "top-center" });
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
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hex={color.hex}
              toast={toast}
            />
          );
        })}
      </section>
      <ToastContainer />
    </main>
  );
}
