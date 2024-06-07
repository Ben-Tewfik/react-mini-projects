import { Link } from "react-router-dom";

export default function MealsErrror() {
  return (
    <div className="error-container">
      <h2>Oops! it&rsquo;s a dead end</h2>
      <Link to={"/meals"} className="error-btn">
        Back Home
      </Link>
    </div>
  );
}
