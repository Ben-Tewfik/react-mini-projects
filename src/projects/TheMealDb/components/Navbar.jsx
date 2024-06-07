import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="meals-nav">
      <div className="meals-nav-center">
        <Link to="/meals" className="meals-img-link">
          <img src={logo} alt="meals logo" className="meals-img" />
        </Link>
        <ul className="meals-link-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "meals-link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/meals"
              className={({ isActive }) =>
                isActive ? "meals-link active" : "meals-link"
              }
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/meals/about"
              className={({ isActive }) =>
                isActive ? "meals-link active" : "meals-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
