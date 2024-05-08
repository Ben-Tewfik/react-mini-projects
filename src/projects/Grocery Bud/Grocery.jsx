import "./style/grocery.css";
export default function Grocery() {
  return (
    <main className="grocery-main-container">
      <section className="grocery-container">
        <h4 className="grocery-title">Grocery Bud</h4>
        <form className="grocery-form">
          <input type="text" placeholder="Add you item" />
          <button className="grocery-btn">Add item</button>
        </form>
        <div className="list-container"></div>
      </section>
    </main>
  );
}
