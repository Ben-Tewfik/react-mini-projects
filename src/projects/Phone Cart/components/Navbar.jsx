import { FaCartPlus } from "react-icons/fa6";
export default function Navbar() {
  return (
    <nav className="cart-nav">
      <div className="cart-nav-center">
        <h2>Shoping cart</h2>
        <button className="cart-nav-btn">
          <FaCartPlus className="cart-icon" />
          <div className="cart-amount">
            <p>0</p>
          </div>
        </button>
      </div>
    </nav>
  );
}
