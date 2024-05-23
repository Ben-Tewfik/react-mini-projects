import "./style/cart.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { CartContext } from "./Context/CartContext";
export default function CartApp() {
  return (
    <CartContext>
      <main className="cartApp-main">
        <Navbar />
        <Cart />
      </main>
    </CartContext>
  );
}
