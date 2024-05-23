import "./style/cart.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
export default function CartApp() {
  return (
    <main className="cartApp-main">
      <Navbar />
      <Cart />
    </main>
  );
}
