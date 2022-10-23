import React from "react";
import style from "./style.module.css";
import NavigationLinks from "./NavigationLinks";
import NumberPage from "./NumberPage";
const Navigation = () => {
  return (
    <div className={style.containerNavigationComponents}>
      <NavigationLinks />
      <NumberPage />
    </div>
  );
};

export default Navigation;
