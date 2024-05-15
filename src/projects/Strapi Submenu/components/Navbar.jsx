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
      </div>
    </nav>
  );
}
