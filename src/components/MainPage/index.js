import React from "react";
import style from "./style.module.css";

import Header from "../Header";
import SmarterDataText from "./SmarterDataText";
import Navigation from "../Navigation";
const MainPage = () => {
  return (
    <div className={style.containerMainPage}>
      <Header />
      <div className={style.containerMainPageContext}>
        <Navigation />
        <SmarterDataText />
      </div>
    </div>
  );
};
export default MainPage;
