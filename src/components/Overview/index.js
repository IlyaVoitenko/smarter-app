import React from "react";
import TitleOverview from "./TitleOverview";
import style from "./style.module.css";
import Header from "../Header";
import OverviewContent from "./OverviewContent";

const Overview = () => {
  const { containerOverview } = style;
  return (
    <div className={containerOverview}>
      <Header />
      <TitleOverview />
      <OverviewContent />
    </div>
  );
};
export default Overview;
