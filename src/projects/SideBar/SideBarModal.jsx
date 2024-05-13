import AppContext from "./Context/AppContext";
import Home from "./components/Home";
import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import "./style/main.css";
export default function SideBarModal() {
  return (
    <AppContext>
      <Home />
      <Modal />
      <SideBar />
    </AppContext>
  );
}
