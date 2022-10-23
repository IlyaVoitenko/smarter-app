import React, { useState } from "react";
import style from "./style.module.css";
const NavigationLinks = (pageActive) => {
  const {
    btnHome,
    containerNavigationLinks,
    spanNavLinks,
    imgPoint,
    btnClient,
    textColorWhite,
    containerImgPoint,
  } = style;

  const [isActiveHomeLink, setIsActiveHomeLink] = useState(true);
  const [isActiveOverviewLink, setIsActiveOverviewLink] = useState(false);
  const [isActiveOurClientsLink, setIsActiveClientsLink] = useState(false);

  switch (pageActive) {
    case "home":
      setIsActiveHomeLink(true);
      setIsActiveClientsLink(false);
      setIsActiveOverviewLink(false);
      break;
    case "overview":
      setIsActiveOverviewLink(true);
      setIsActiveClientsLink(false);
      setIsActiveHomeLink(false);
      break;
    case "clients":
      setIsActiveClientsLink(true);
      setIsActiveHomeLink(false);
      setIsActiveOverviewLink(false);
      break;
    default:
      break;
  }
  return (
    <div className={containerNavigationLinks}>
      <span className={spanNavLinks} id={btnHome}>
        HOME
      </span>
      <div className={containerImgPoint}>
        <img src="/image/Rectangle 20.png" className={imgPoint} alt="" />
      </div>
      <span className={spanNavLinks}>OVERVIEW</span>
      <div className={containerImgPoint}>
        <img src="/image/Rectangle 20.png" className={imgPoint} alt="" />
      </div>
      <span className={spanNavLinks} id={btnClient}>
        OUR CLIENTS
      </span>
    </div>
  );
};

export default NavigationLinks;
