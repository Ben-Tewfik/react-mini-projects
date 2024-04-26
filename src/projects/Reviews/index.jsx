import "./style/reviews.css";
import reviews from "../../utils/reviewsData";
import Review from "./components/Review";
import { useState } from "react";
export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function checkIndex(number) {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  }
  function handleNext() {
    setCurrentIndex(currentIndex => {
      let newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  }
  function handlePrevious() {
    setCurrentIndex(currentIndex => {
      let newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  }
  function handleRandomBtn() {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === currentIndex) {
      randomNumber = randomNumber + 1;
    }
    return setCurrentIndex(checkIndex(randomNumber));
  }
  return (
    <main className="reviews-container">
      <Review
        review={reviews[currentIndex]}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleRandomBtn={handleRandomBtn}
      />
    </main>
  );
}
