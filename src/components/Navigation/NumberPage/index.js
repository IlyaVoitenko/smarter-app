import React from "react";
import style from "./style.module.css";

export const NumberPage = ({ numberPage }) => {
  const { containerNumberPage, spanNumberPage, textColorGreen } = style;
  return (
    <div className={containerNumberPage}>
      <span className={spanNumberPage}>
        {numberPage} <span className={textColorGreen}>/ 05</span>
      </span>
    </div>
  );
};
export default NumberPage;
