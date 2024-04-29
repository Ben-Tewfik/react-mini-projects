export default function Menu({ menu }) {
  return (
    <section className="menu-container">
      {menu.map(item => {
        const { desc, id, img, price, title } = item;
        return (
          <article key={id} className="menu-item-container">
            <img src={img} alt={title} />
            <div className="desc-container">
              <div className="desc-title-container">
                <h2 className="desc-title">{title}</h2>
                <p className="desc-price">${price}</p>
              </div>
              <p className="description">{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
