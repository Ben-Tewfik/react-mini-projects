import { FaQuoteRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Review({
  review,
  handleNext,
  handlePrevious,
  handleRandomBtn,
}) {
  console.log(review);
  const { image, job, name, text } = review;
  return (
    <article className="review-container">
      <div className="review-img-container">
        <img src={image} alt={name} />
        <span className="review-quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="review-name">{name}</h3>
      <h4 className="review-job">{job}</h4>
      <p className="review-text">{text}</p>
      <div className="review-btns-container">
        <FaChevronLeft onClick={() => handlePrevious()} />
        <FaChevronRight onClick={() => handleNext()} />
      </div>
      <button className="review-random-btn" onClick={() => handleRandomBtn()}>
        surprise me
      </button>
    </article>
  );
}
