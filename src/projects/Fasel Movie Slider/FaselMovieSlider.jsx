import "./style/faselMovieSlider.css";
import movies from "../../utils/faselSliderData";
import { useEffect, useState } from "react";
export default function FaselMovieSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // cleanup function
    setTimeout(() => {
      if (imageIndex >= movies.length - 1) {
        return setImageIndex(0);
      }
      return setImageIndex(imageIndex + 1);
    }, 3000);
  }, [imageIndex]);
  return (
    <section className="fasel-slider-container">
      <div className="fasel-slider-img-container">
        {movies.map((movie, index) => {
          const { img, title, desc, categories } = movie;
          return (
            <>
              <img
                src={img}
                alt={`${title} image`}
                className={`fasel-slider-img`}
                style={{ translate: `-${imageIndex * 100}%` }}
                key={title}
              />
              <article className="fasel-slider-img-info">
                <h2 className="fasel-slider-img-title">{title}</h2>
                <ul className="fasel-slider-img-genres-container">
                  {categories.map(genre => {
                    return (
                      <li key={genre} className="fasel-slider-img-genre">
                        {genre}
                      </li>
                    );
                  })}
                </ul>
                <p className="fasel-slider-img-desc">{desc}</p>
              </article>
            </>
          );
        })}
      </div>
      <div className="fasel-slider-dot-btn-container">
        {movies.map((_, index) => {
          return (
            <button
              key={index}
              className={`${
                index === imageIndex
                  ? "active-dot-btn fasel-slider-dor-btn"
                  : "fasel-slider-dor-btn"
              }`}
              onClick={() => setImageIndex(index)}
            ></button>
          );
        })}
      </div>
    </section>
  );
}
