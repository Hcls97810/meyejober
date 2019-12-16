import React, { useState } from "react";
import "./style.scss";
const Toggle = ({ left_value, right_value, onChange }) => {
  const [state, setState] = useState(true);
  onChange = params => {
    setState(params);
  };

  return (
    <div className="switch">
      <label
        for={right_value}
        className={
          state
            ? "switch--label switch--label-on"
            : "switch--label switch--label-off"
        }
        onClick={e => onChange(true)}
      >
        {left_value}
      </label>

      <label
        for={left_value}
        className={
          state
            ? "switch--label switch--label-off"
            : "switch--label switch--label-on"
        }
        onClick={() => onChange(false)}
      >
        {right_value}
      </label>
      <span
        className={
          state
            ? "switch--selection switch--selection-on"
            : "switch--selection switch--selection-off"
        }
      ></span>
    </div>
  );
};

export default Toggle;
