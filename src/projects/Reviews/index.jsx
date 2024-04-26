import "./style/reviews.css";
import reviews from "../../utils/reviewsData";
import Review from "./components/Review";
export default function Reviews() {
  return (
    <main className="reviews-container">
      <Review review={reviews[0]} />
    </main>
  );
}
