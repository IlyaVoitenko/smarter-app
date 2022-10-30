import React from "react";
import Navigation from "../../Navigation";
import SlickData from "./SlickCarousel";
import style from "./style.module.css";

const OurClientContext = () => {
  const { containerOurClientContext } = style;
  return (
    <div className={containerOurClientContext}>
      <Navigation numberPage={"03"} pageActive={"our-clients"} />
      <SlickData />
    </div>
  );
};

export default OurClientContext;
