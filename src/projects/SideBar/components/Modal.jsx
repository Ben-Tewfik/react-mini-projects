import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context/AppContext";
export default function Modal() {
  const { showModal, closeModal } = useGlobalContext();
  return (
    <div className={`${showModal ? "show-modal" : ""} modal-container`}>
      <div className="modal">
        <h3>modal content</h3>
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
