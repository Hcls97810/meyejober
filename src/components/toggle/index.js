import React from "react";
import "./style.scss";
const Toggle = ({ left_value, right_value, onChange }) => {
  return (
    <div className="container">
      <div className="switch">
        <input
          type="radio"
          className="switch--input"
          name="view"
          value={right_value}
          id={right_value}
          checked
        />
        <label
          for={right_value}
          className="switch--label switch--label-off"
          //onClick={() => onChange("month")}
        >
          {left_value}
        </label>
        <input
          type="radio"
          className="switch--input"
          name="view"
          value={left_value}
          id={left_value}
        />
        <label
          for={left_value}
          className="switch--label switch--label-on"
          //onClick={() => onChange("year")}
        >
          {right_value}
        </label>
        <span className="switch--selection"></span>
      </div>
    </div>
  );
};

export default Toggle;
