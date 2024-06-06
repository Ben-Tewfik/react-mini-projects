export default function MealCart({ id, category, title, area, image }) {
  return (
    <article className="meal-cart">
      <img src={image} alt={title} className="meal-cart-img" />
      <div className="meal-cart-footer">
        <h3>{title}</h3>
        <h5>{category}</h5>
        <p>{area}</p>
        <button className="meal-cart-btn">details</button>
      </div>
    </article>
  );
}
