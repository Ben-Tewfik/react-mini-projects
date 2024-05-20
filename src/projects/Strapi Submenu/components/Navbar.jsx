import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/StrapiContext";

export default function Navbar() {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="strapi-nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1>strapi</h1>
          <button className="strapi-btn" onClick={openSidebar}>
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
