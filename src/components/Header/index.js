import React from "react";
import style from "./style.module.css";
import LogoHeader from "./LogoHeader";
import LinksHeader from "./LinksHeader";
import BtnAuth from "./BtnAuth";

const Header = () => {
  return (
    <div className={style.containerHeader}>
      <LogoHeader />
      <LinksHeader />
      <BtnAuth />
    </div>
  );
};
export default Header;
