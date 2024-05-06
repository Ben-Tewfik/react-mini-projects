import "./style/loremIpsum.css";
import text from "../../utils/LoremIpsumData";
import { useState } from "react";
export default function LoremIpsum() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setData(text.slice(0, number));
  }
  return (
    <section className="lorem-section">
      <h4 className="lorem-title">tired of boring lorem ipsum ?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number" className="lorem-label">
          paragraphs:
        </label>
        <input
          type="number"
          id="number"
          className="lorem-input"
          max={8}
          step={1}
          min={1}
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button className="lorem-btn">generate</button>
      </form>
      <article className="lorem-paragraph">
        {data.map((item, index) => {
          return (
            <p key={index} className="lorem-text">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}
