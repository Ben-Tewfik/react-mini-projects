import List from "./List";
import data from "../../utils/data";
import { useState } from "react";
import "./BirthdayParty.css";
export default function BirthdayParty() {
  const [people, setPeople] = useState(data);
  function handleClick() {
    setPeople([]);
  }
  return (
    <div className="container">
      <h2 className="title">{people.length} birthdays today</h2>
      <List people={people} />
      <button className="btn" onClick={() => handleClick()}>
        clear all
      </button>
    </div>
  );
}
