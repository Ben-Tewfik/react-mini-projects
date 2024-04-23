export default function List({ people }) {
  return (
    <section className="list-container">
      {people.map(person => {
        const { age, id, image, name } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div className="info-container">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
