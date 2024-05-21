import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/StrapiContext";

export default function Submenu() {
  const { submenu, page, location } = useGlobalContext();
  const containerRef = useRef(null);
  const { page: pageTitle, links } = page;
  useEffect(() => {
    const { center, bottom } = location;
    containerRef.current.style.left = `${center}px`;
    containerRef.current.style.top = `${bottom + 10}px`;
  }, [page, location]);
  return (
    <div
      ref={containerRef}
      className={`${submenu ? "show-submenu" : ""} strapi-submenu`}
    >
      <h4>{pageTitle}</h4>
      <ul className="sublinks-container">
        {links?.map(link => {
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
    </div>
  );
}
