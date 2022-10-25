import React from "react";
import style from "./style.module.css";
import Header from "../Header";
import SmarterDataText from "./SmarterDataText";
import Navigation from "../Navigation";
import ImagesRics from "./ImagesRics";
import TrustBlock from "./TrustBlock";
import LogosCompanies from "./LogosCompanies";

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
        <LogosCompanies />
      </div>
    </div>
  );
};
export default MainPage;
