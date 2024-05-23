import { cartItems } from "../../../utils/cartData";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <section className="cart-container">
      <header className="cart-header">
        <h2>your bag</h2>
      </header>
      <article className="cart-main">
        {cartItems.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer className="cart-footer">
        <hr />
        <h5>
          total <span>$0</span>
        </h5>
        <button className="cart-clear-btn">clear cart</button>
      </footer>
    </section>
  );
}
