import people from "../../utils/sliderData";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./style/slider.css";
import { useEffect, useState } from "react";
console.log(people);
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(people.length - 1);
    }
    if (currentIndex > people.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, quote, title } = person;
        let position = "nextSlide";
        if (index === currentIndex) {
          position = "active";
        }
        if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={`${position} slide`} key={id}>
            <img src={image} alt={name} className="slide-img" />
            <h5 className="slide-name">{name}</h5>
            <p className="slide-title">{title}</p>
            <p className="slide-quote">{quote}</p>
            <FaQuoteRight className="slide-icon" />
          </article>
        );
      })}
      <button
        className="next-btn"
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        <FiChevronRight />
      </button>
      <button
        className="prev-btn"
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        <FiChevronLeft />
      </button>
    </section>
  );
}
