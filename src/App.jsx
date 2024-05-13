import { ToastContainer } from "react-toastify";
import "./App.css";
import SideBarModal from "./projects/SideBar/SideBarModal";

function App() {
  return (
    <>
      <SideBarModal />
      <ToastContainer />
    </>
  );
}

export default App;
