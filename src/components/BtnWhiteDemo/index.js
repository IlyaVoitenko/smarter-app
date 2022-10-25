import React from "react";
import style from "./style.module.css";
const BtnWhiteDemo = ({ stylePosition } = "") => {
  return (
    <div className={stylePosition}>
      <button className={style.btn}>
        <img src="/image/btnIcon.png" className={style.btnIcon} />
        <span className={style.textBtnWhiteDemo}>BOOK A DEMO</span>
      </button>
    </div>
  );
};

export default BtnWhiteDemo;
