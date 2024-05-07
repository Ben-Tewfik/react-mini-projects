export default function SingleColor({ weight, index, hex }) {
  return (
    <article
      className={`${index > 7 ? "light-color" : ""} single-color`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
}
