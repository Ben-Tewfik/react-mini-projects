import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const GlobalMealContext = createContext();
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
function MealsContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios(`${URL}${search}`);
      if (search.length === 0) {
        setSearch("a");
      }
      if (response.data.meals) {
        const newMeals = response.data.meals.map(
          ({
            idMeal: id,
            strCategory: category,
            strMeal: title,
            strArea: area,
            strMealThumb: image,
            strInstructions: instruction,
          }) => {
            return { id, category, title, area, image, instruction };
          }
        );
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [search]);
  useEffect(() => {
    fetchMeals();
  }, [search, fetchMeals]);
  return (
    <GlobalMealContext.Provider value={{ meals, setSearch, loading }}>
      {children}
    </GlobalMealContext.Provider>
  );
}

const useGlobalMealContext = () => useContext(GlobalMealContext);

export { useGlobalMealContext, MealsContext };
