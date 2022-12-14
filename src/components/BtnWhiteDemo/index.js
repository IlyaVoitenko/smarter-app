import React from "react";
import style from "./style.module.css";

const BtnWhiteDemo = ({ stylePosition } = "") => {
  const { btn, btnIcon, textBtnWhiteDemo } = style;
  return (
    <div className={stylePosition}>
      <button className={btn}>
        <img src="/image/btnIcon.png" className={btnIcon} />
        <span className={textBtnWhiteDemo}>BOOK A DEMO</span>
      </button>
    </div>
  );
};

export default BtnWhiteDemo;
