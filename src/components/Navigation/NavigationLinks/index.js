import React from "react";
import style from "./style.module.css";
import ImgPoint from "../ImgPoint";
import NavigationLink from "../NavigationLink";

const NavigationLinks = () => {
  const { btnHome, containerNavigationLinks, btnClient, btnOverview } = style;
  return (
    <div className={containerNavigationLinks}>
      <NavigationLink text={"HOME"} path={"/home"} idLink={btnHome} />
      <ImgPoint />
      <NavigationLink
        text={"OVERVIEW"}
        path={"/overview"}
        idLink={btnOverview}
      />
      <ImgPoint />
      <NavigationLink
        text={"OUR CLIENTS"}
        path={"/our-clients"}
        idLink={btnClient}
      />
    </div>
  );
};

export default NavigationLinks;
