import { FaTimes } from "react-icons/fa";
import sublinks from "../../../utils/StrapiData";
export default function Sidebar() {
  return (
    <aside className="strapi-sidebar">
      <div className="strapi-sidebar-container">
        <button className="sidebar-close-btn">
          <FaTimes />
        </button>
        <div className="links-container">
          {sublinks.map(link => {
            const { pageId, page, links } = link;
            return (
              <article key={pageId}>
                <h3>{page}</h3>
                <ul className="sublinks-container">
                  {links.map(link => {
                    const { id, label, icon, url } = link;
                    return (
                      <li key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
