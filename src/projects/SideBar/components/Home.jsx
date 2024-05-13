import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context/AppContext";

export default function Home() {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <section className="home-container">
      <button className="sidebar-bars-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="modal-btn" onClick={openModal}>
        show modal
      </button>
    </section>
  );
}
