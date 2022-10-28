import React from "react";
import Header from "../Header";
import OurClientContext from "./OurClientContext";
import style from "./style.module.css";
const OurClient = () => {
  const { containerOurClient } = style;
  return (
    <div className={containerOurClient}>
      <Header />
      <OurClientContext />
    </div>
  );
};

export default OurClient;
