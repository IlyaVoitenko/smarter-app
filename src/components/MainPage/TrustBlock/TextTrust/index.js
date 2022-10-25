import React from "react";
import style from "./style.module.css";

const TextTrust = () => {
  const { textTextTrust } = style;
  return (
    <div>
      <span className={textTextTrust}>trusted by</span>
    </div>
  );
};

export default TextTrust;
