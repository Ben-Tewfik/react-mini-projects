import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function CartItem({ id, amount, img, price, title }) {
  return (
    <div className="single-item">
      <img src={img} alt="" className="single-item-img" />
      <div className="single-item-info">
        <h5>{title}</h5>
        <span>${price}</span>
        <button className="remove-btn">remove</button>
      </div>
      <div className="single-item-toggle-container">
        <button className="increase-items-btn">
          <IoIosArrowUp />
        </button>
        <span className="single-item-amount">{amount}</span>
        <button className="decrease-items-btn">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
}
