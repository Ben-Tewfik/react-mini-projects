export default function Tour({ tour }) {
  const { image, name, info, price } = tour;
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-article-info">
        <h2>{name}</h2>
        <p>{info}</p>
        <span>${price}</span>
        <button>not interested</button>
      </div>
    </article>
  );
}
