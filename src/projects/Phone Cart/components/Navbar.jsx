import { FaCartPlus } from "react-icons/fa6";
import { useGlobalContext } from "../Context/CartContext";
export default function Navbar() {
  const { amount } = useGlobalContext();
  return (
    <nav className="cart-nav">
      <div className="cart-nav-center">
        <h2>Shoping cart</h2>
        <button className="cart-nav-btn">
          <FaCartPlus className="cart-icon" />
          <div className="cart-amount">
            <p>{amount}</p>
          </div>
        </button>
      </div>
    </nav>
  );
}
