import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="meals-nav">
      <div className="meals-nav-center">
        <img src={logo} alt="meals logo" className="meals-img" />
        <ul className="meals-link-list">
          <li>
            <Link to="/" className="meals-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/meals" className="meals-link">
              Meals
            </Link>
          </li>
          <li>
            <Link to="/meals/about" className="meals-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
