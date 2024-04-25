import { useState } from "react";

export default function Tour({ tour }) {
  const { image, name, info, price } = tour;
  const [text, useText] = useState(info.substring(0, 200));
  function handleClick() {
    if (text.length > 200) {
      useText(info.substring(0, 200));
    } else {
      useText(info);
    }
  }
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-article-info">
        <h2>{name}</h2>
        <p>
          {text}
          <button className="text-btn" onClick={() => handleClick()}>
            {text.length <= 200 ? "..read more" : "show less"}
          </button>
        </p>
        <span>${price}</span>
        <button className="btn">not interested</button>
      </div>
    </article>
  );
}
