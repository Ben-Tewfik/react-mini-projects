export default function Categories({ handleClick, categories }) {
  return (
    <div className="category-container">
      {categories.map(category => {
        return (
          <button key={category} onClick={() => handleClick(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
