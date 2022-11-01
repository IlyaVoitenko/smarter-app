import React from "react";
import Navigation from "../../Navigation";
import SlickData from "./SlickCarousel";
import TitleClient from "../TitleClient";
import BtnTransparentDemo from "../../BtnTransparentDemo";
import style from "./style.module.css";

const OurClientContext = () => {
  const { containerOurClientContext, columnFlex, containerBtn } = style;
  return (
    <div className={containerOurClientContext}>
      <Navigation numberPage={"03"} pageActive={"our-clients"} />
      <div className={columnFlex}>
        <TitleClient />
        <SlickData />
        <div className={containerBtn}>
          <BtnTransparentDemo />
        </div>
      </div>
    </div>
  );
};

export default OurClientContext;
