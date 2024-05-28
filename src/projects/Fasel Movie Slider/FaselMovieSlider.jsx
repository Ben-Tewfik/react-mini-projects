import "./style/faselMovieSlider.css";
import { FaPlay } from "react-icons/fa6";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import movies from "../../utils/faselSliderData";
import { useEffect, useState } from "react";
export default function FaselMovieSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  console.log("out", imageIndex);
  function showNextSlide() {
    setImageIndex(index => {
      if (index === movies.length - 1) return movies.length - 1;
      return index + 1;
    });
  }
  function showPrevSlide() {
    setImageIndex(index => {
      if (imageIndex <= 0) return 0;
      return index - 1;
    });
  }

  useEffect(() => {
    // cleanup function
    setTimeout(() => {
      if (imageIndex >= movies.length - 1) {
        return setImageIndex(0);
      }
      return setImageIndex(imageIndex + 1);
    }, 5000);
  }, [imageIndex]);
  return (
    <section className="fasel-slider-container">
      <div className="fasel-slider-img-container">
        {movies.map(movie => {
          const { img, title, desc, categories, poster } = movie;
          return (
            <div key={title} className="slider-img-container">
              <img
                src={img}
                alt={`${title} image`}
                className={`fasel-slider-img`}
                style={{ translate: `-${imageIndex * 100}%` }}
              />
              <article
                className="fasel-slider-img-info"
                style={{ translate: `-${imageIndex * 100}%` }}
              >
                <img
                  src={poster}
                  alt="poster img"
                  className="fasel-slider-poster"
                />
                <div className="movie-desc-container">
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
                  <button className="fasel-slider-info-btn">
                    watch now <FaPlay />
                  </button>
                </div>
              </article>
            </div>
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
      <button className="next-slide-btn" onClick={showNextSlide}>
        <MdNavigateNext />
      </button>
      <button className="prev-slide-btn" onClick={showPrevSlide}>
        <MdNavigateBefore />
      </button>
    </section>
  );
}
