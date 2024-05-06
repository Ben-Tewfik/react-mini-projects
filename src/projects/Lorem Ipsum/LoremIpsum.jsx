import "./style/loremIpsum.css";
import text from "../../utils/LoremIpsumData";
console.log(text);
export default function LoremIpsum() {
  return (
    <section className="lorem-section">
      <h4 className="lorem-title">tired of boring lorem ipsum ?</h4>
      <form className="lorem-form">
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
        />
        <button className="lorem-btn">generate</button>
      </form>
      <article className="lorem-paragraph"></article>
    </section>
  );
}
