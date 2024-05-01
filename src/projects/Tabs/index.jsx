import "./style/tabs.css";
import { useState } from "react";
import tabs from "../../utils/tabsData";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Tabs() {
  const [value, setValue] = useState(0);
  const { company, dates, duties, id, title } = tabs[value];
  return (
    <section className="tabs-container">
      <div className="tab-buttons-container">
        {tabs.map((item, index) => {
          return (
            <button
              key={item.id}
              className={index === value ? "active" : null}
              onClick={() => {
                setValue(index);
              }}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <article className="tab-container" key={id}>
        <h3 className="tab-title">{title}</h3>
        <span className="tab-company">{company}</span>
        <p className="tab-date">{dates}</p>
        <div className="tab-duties">
          {duties.map((duty, index) => {
            return (
              <div className="duty-container" key={index}>
                <MdOutlineKeyboardDoubleArrowRight className="duty-icon" />
                <p className="duty-desc">{duty}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
