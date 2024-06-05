import { Routes, Route } from "react-router-dom";
import "./styles/meals.css";
import MealsHome from "./pages/MealsHome";
import MealsAbout from "./pages/MealsAbout";
import SharedLayout from "./pages/SharedLayout";
export default function Meals() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MealsHome />} />
        <Route path="about" element={<MealsAbout />} />
      </Route>
    </Routes>
  );
}
