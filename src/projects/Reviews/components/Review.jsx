import { FaQuoteRight } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Review({ review }) {
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
        <MdArrowBackIos />
        <MdArrowForwardIos />
      </div>
      <button className="review-random-btn">surprise me</button>
    </article>
  );
}
