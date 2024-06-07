import { Routes, Route } from "react-router-dom";
import "./styles/meals.css";
import MealsHome from "./pages/MealsHome";
import MealsAbout from "./pages/MealsAbout";
import SharedLayout from "./pages/SharedLayout";
import { MealsContext } from "./context/MealsContext";
import MealsErrror from "./pages/MealsErrror";
import SingleMeal from "./pages/SingleMeal";
export default function Meals() {
  return (
    <MealsContext>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MealsHome />} />
          <Route path="about" element={<MealsAbout />} />
          <Route path="/meal/:id" element={<SingleMeal />} />
          <Route path="*" element={<MealsErrror />} />
        </Route>
      </Routes>
    </MealsContext>
  );
}
