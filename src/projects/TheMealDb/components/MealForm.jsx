import { useEffect, useRef } from "react";
import { useGlobalMealContext } from "../context/MealsContext";

export default function MealForm() {
  const { setSearch } = useGlobalMealContext();
  const searchRef = useRef("");
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <form className="meals-form" onSubmit={e => e.preventDefault()}>
      <label className="meals-form-title">search your favorite meal</label>
      <input
        type="search"
        ref={searchRef}
        onChange={() => setSearch(searchRef.current.value)}
      />
    </form>
  );
}
