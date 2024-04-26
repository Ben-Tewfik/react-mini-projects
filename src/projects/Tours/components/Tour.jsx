import { useState } from "react";

export default function Tour({ tour }) {
  const { image, name, info, price } = tour;
  const [read, setRead] = useState(false);
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-article-info">
        <h2>{name}</h2>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button className="text-btn" onClick={() => setRead(!read)}>
            {read ? "show less" : "read more"}
          </button>
        </p>
        <span>${price}</span>
        <button className="btn">not interested</button>
      </div>
    </article>
  );
}
