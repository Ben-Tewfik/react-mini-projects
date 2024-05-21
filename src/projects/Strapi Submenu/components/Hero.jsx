import { useGlobalContext } from "../context/StrapiContext";

export default function Hero() {
  const { hideSubmenu } = useGlobalContext();
  return (
    <section className="hero-container" onMouseOver={hideSubmenu}>
      <div className="hero-center">
        <h1>manage any content anywhere</h1>
        <p>
          strapi is the leading open-source headless CMs. its 100% javascript
          and fully customizable
        </p>
      </div>
    </section>
  );
}
