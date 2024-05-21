import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/StrapiContext";

export default function Navbar() {
  const { openSidebar, showSubmenu, hideSubmenu } = useGlobalContext();
  function handleList(e) {
    const element = e.target;
    const text = element.textContent;
    const rect = element.getBoundingClientRect();
    const center = (rect.left + rect.right) / 2;
    const bottom = rect.bottom;
    showSubmenu(text, { center, bottom });
  }
  function handleSubmenu(e) {
    if (!e.target.classList.contains("nav-list-btn")) {
      hideSubmenu();
    }
  }
  return (
    <nav className="strapi-nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <h1>strapi</h1>
          <button className="strapi-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-list">
          <li>
            <button className="nav-list-btn" onMouseOver={handleList}>
              product
            </button>
          </li>
          <li>
            <button className="nav-list-btn" onMouseOver={handleList}>
              solutions
            </button>
          </li>
          <li>
            <button className="nav-list-btn" onMouseOver={handleList}>
              resources
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
