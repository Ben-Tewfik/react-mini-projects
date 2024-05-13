import { FaTimes } from "react-icons/fa";
import { links, social } from "../../../utils/SideBarModalData";
import { useGlobalContext } from "../Context/AppContext";
export default function SideBar() {
  const { showSidebar, closeSidebar } = useGlobalContext();
  return (
    <div className={`${showSidebar ? "show-sidebar" : ""} sidebar-container`}>
      <div className="sidebar-header">
        <h1>
          coding <span>addict</span>
        </h1>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links-list">
        {links.map(link => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} className="link">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="icons-list">
        {social.map(item => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url} className="icon">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
