import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Meals from "./projects/TheMealDb/Meals";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="meals/*" element={<Meals />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
