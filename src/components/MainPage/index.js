import React from "react";
import style from "./style.module.css";
import Header from "../Header";
import SmarterDataText from "./SmarterDataText";
import Navigation from "../Navigation";
import ImagesRics from "./ImagesRics";
import TrustBlock from "./TrustBlock";
const MainPage = () => {
  const { containerMainPage, containerMainPageContext } = style;
  return (
    <div className={containerMainPage}>
      <Header />
      <div className={containerMainPageContext}>
        <Navigation />
        <SmarterDataText />
        <ImagesRics />
        <TrustBlock />
      </div>
    </div>
  );
};
export default MainPage;
