import React from "react";
import style from "./style.module.css";
import Navigation from "../../Navigation";
import OverviewCards from "./OverviewCards";
import ImageBackCard from "./ImageBackCard";
import BtnTransparentDemo from "../../BtnTransparentDemo";

const OverviewContent = () => {
  const { container, positionBtn } = style;
  return (
    <div className={container}>
      <Navigation numberPage={"02"} pageActive={"overview"} />
      <ImageBackCard />
      <OverviewCards />
      <BtnTransparentDemo stylePosition={positionBtn} />
    </div>
  );
};

export default OverviewContent;
