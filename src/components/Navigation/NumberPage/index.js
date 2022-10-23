import React from "react";
import style from "./style.module.css";

export const NumberPage = () => {
  return (
    <div className={style.containerNumberPage}>
      <span className={style.spanNumberPage}>
        01 <span className={style.textColorGreen}>/ 05</span>
      </span>
    </div>
  );
};
export default NumberPage;
