import React from "react";
import style from "./style.module.css";
import NavigationLinks from "./NavigationLinks";
import NumberPage from "./NumberPage";

const Navigation = ({ numberPage }) => {
  const { containerNavigationComponents } = style;
  return (
    <div className={containerNavigationComponents}>
      <NavigationLinks />
      <NumberPage numberPage={numberPage} />
    </div>
  );
};

export default Navigation;
