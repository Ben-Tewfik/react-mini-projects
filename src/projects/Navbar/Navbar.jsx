import { FaBars } from "react-icons/fa";
import "./style/navbar.css";
import { links, social } from "../../utils/NavbarData";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const [showList, setShowList] = useState(false);
  const linksContainerRef = useRef(null);
  const linksListRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksListRef.current.getBoundingClientRect().height;
    if (showList) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showList]);
  return (
    <section className="navbar-container">
      <div className="navbar-center">
        <h1 className="navbar-logo">
          coding <span>addict</span>
        </h1>
        <button className="toggle-btn" onClick={() => setShowList(!showList)}>
          <FaBars className="toggle-icon" />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links-list" ref={linksListRef}>
          {links.map(link => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url} className="link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
