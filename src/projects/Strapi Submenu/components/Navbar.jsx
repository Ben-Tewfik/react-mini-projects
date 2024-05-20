import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="strapi-nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1>strapi</h1>
          <button className="strapi-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-list">
          <li>
            <button className="nav-list-btn">product</button>
          </li>
          <li>
            <button className="nav-list-btn">solutions</button>
          </li>
          <li>
            <button className="nav-list-btn">resources</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
