import React from "react";
import style from "./style.module.css";

export const NumberPage = () => {
  const { containerNumberPage, spanNumberPage, textColorGreen } = style;
  return (
    <div className={containerNumberPage}>
      <span className={spanNumberPage}>
        01 <span className={textColorGreen}>/ 05</span>
      </span>
    </div>
  );
};
export default NumberPage;
