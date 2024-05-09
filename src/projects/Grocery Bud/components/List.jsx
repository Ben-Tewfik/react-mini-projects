import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function List({ title, id, removeItem, editItem }) {
  return (
    <article className="grocery-item-container">
      <p className="grocery-item-title">{title}</p>
      <div className="grocery-btns-container">
        <button className="grocery-edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button className="grocery-delete-btn" onClick={() => removeItem(id)}>
          <FaTrashAlt />
        </button>
      </div>
    </article>
  );
}
