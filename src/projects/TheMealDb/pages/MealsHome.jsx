import MealForm from "../components/MealForm";
import MealsDb from "../components/MealsDb";

export default function Home() {
  return (
    <section className="meals-home-container">
      <MealForm />
      <MealsDb />
    </section>
  );
}
