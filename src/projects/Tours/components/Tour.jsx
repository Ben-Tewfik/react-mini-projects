import { useState } from "react";

export default function Tour({ tour, removeTour }) {
  const { image, name, info, price, id } = tour;
  const [read, setRead] = useState(false);
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-article-info">
        <h2>{name}</h2>
        <p className={read ? "info-height" : "infoWithoutHeight"}>
          {read ? info : `${info.substring(0, 200)}...`}
          <button className="text-btn" onClick={() => setRead(!read)}>
            {read ? "show less" : "read more"}
          </button>
        </p>
        <span>${price}</span>
        <button className="btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
}
