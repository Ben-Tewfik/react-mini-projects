import { Link, useParams } from "react-router-dom";
import { useGlobalMealContext } from "../context/MealsContext";

export default function SingleMeal() {
  const { meals } = useGlobalMealContext();
  const { id } = useParams();
  const singleMeal = meals.find(meal => meal.id === id);
  const { image, category, area, title, instruction } = singleMeal;

  return (
    <section className="single-meal-container">
      <Link to="/meals" className="link">
        Back To Meals
      </Link>
      <h1>{title}</h1>
      <div className="single-meal">
        <img src={image} alt="" className="single-meal-img" />
        <article className="single-meal-info">
          <h3>
            <span>Name :</span>
            {title}
          </h3>
          <h3>
            <span>Category :</span>
            {category}
          </h3>
          <h3>
            <span>Area :</span>
            {area}
          </h3>
          <h3>
            <span>Instructions :</span>
            {instruction}
          </h3>
        </article>
      </div>
    </section>
  );
}
