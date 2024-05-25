import { useGlobalContext } from "../Context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, clearCart, total } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <header className="empty-cart-header">
        <h2>your bag</h2>
        <h3>is currently empty</h3>
      </header>
    );
  }
  return (
    <section className="cart-container">
      <header className="cart-header">
        <h2>your bag</h2>
      </header>
      <article className="cart-main">
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer className="cart-footer">
        <hr />
        <h5>
          total <span>${total}</span>
        </h5>
        <button className="cart-clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}
