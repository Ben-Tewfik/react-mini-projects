import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

export default function SingleQuestion({ info, title }) {
  const [show, setShow] = useState(false);
  return (
    <div className="single-question">
      <header className="single-question-header">
        <h5 className="single-question-title">{title}</h5>
        <span onClick={() => setShow(!show)}>
          {show ? (
            <FaCircleMinus className="single-question-icon" />
          ) : (
            <FaCirclePlus className="single-question-icon" />
          )}
        </span>
      </header>
      <p className="single-question-info">{show && info}</p>
    </div>
  );
}
