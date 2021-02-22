import React, { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Ratting = () => {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span className="rattingContent">
      <Rate tooltips={desc} onChange={handleChange} value={value} />
    </span>
  );
};
export default Ratting;
