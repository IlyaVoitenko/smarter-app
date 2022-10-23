import React from "react";
import style from "./style.module.css";
const BtnAuth = () => {
  return (
    <div className={style.containerBtnAuth}>
      <a href="#">
        <button className={style.btnSingIn}>
          <span className={style.spanSingIn}>Sing in</span>
          <img src="/image/singInImage.png" alt="" />
        </button>
      </a>
    </div>
  );
};
export default BtnAuth;
