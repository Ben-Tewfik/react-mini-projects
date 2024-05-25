import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGlobalContext } from "../Context/CartContext";
export default function CartItem({ id, amount, img, price, title }) {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <div className="single-item">
      <img src={img} alt="" className="single-item-img" />
      <div className="single-item-info">
        <h5>{title}</h5>
        <span>${price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="single-item-toggle-container">
        <button className="increase-items-btn" onClick={() => increase(id)}>
          <IoIosArrowUp />
        </button>
        <span className="single-item-amount">{amount}</span>
        <button className="decrease-items-btn" onClick={() => decrease(id)}>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}
