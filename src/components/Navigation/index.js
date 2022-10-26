import React from "react";
import style from "./style.module.css";
import NavigationLinks from "./NavigationLinks";
import NumberPage from "./NumberPage";

const Navigation = ({ numberPage, pageActive }) => {
  const { containerNavigationComponents } = style;
  return (
    <div className={containerNavigationComponents}>
      <NavigationLinks pageActive={pageActive} />
      <NumberPage numberPage={numberPage} />
    </div>
  );
};

export default Navigation;
