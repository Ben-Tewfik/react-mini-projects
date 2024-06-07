import { useGlobalMealContext } from "../context/MealsContext";
import Loading from "./Loading";
import MealCart from "./MealCart";

export default function MealsDb() {
  const { meals, loading } = useGlobalMealContext();
  if (loading) {
    return <Loading />;
  }
  if (meals.length < 1) {
    return (
      <section className="no-found-meals">
        <h1>no meals matched your search criteria</h1>
      </section>
    );
  }
  return (
    <section className="meals-container">
      <h2 className="meals-title">Meals</h2>
      <div className="meals">
        {meals.map(meal => {
          return <MealCart key={meal.id} {...meal} />;
        })}
      </div>
    </section>
  );
}
