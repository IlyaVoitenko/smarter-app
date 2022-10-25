import React from "react";
import style from "./style.module.css";

const BtnTransparentDemo = ({ stylePosition }) => {
  const { btn, textBtnWhiteDemo, btnIcon } = style;
  return (
    <div className={stylePosition}>
      <button className={btn}>
        <img src="/image/btnIcon.png" className={btnIcon} alt="" />
        <span className={textBtnWhiteDemo}>BOOK A DEMO</span>
      </button>
    </div>
  );
};

export default BtnTransparentDemo;
