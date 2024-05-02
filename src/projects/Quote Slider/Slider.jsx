import people from "../../utils/sliderData";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./style/slider.css";
console.log(people);
export default function Slider() {
  return (
    <section className="slider-container">
      {people.map(person => {
        const { id, image, name, quote, title } = person;
        return (
          <article className="slide" key={id}>
            <img src={image} alt={name} className="slide-img" />
            <h5 className="slide-name">{name}</h5>
            <p className="slide-title">{title}</p>
            <p className="slide-quote">{quote}</p>
            <FaQuoteRight className="slide-icon" />
          </article>
        );
      })}
      <button className="next-btn">
        <FiChevronRight />
      </button>
      <button className="prev-btn">
        <FiChevronLeft />
      </button>
    </section>
  );
}
