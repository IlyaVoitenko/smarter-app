import React, { useState } from "react";
import style from "./style.module.css";
import ImgPoint from "../ImgPoint";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  const handleClick = (state) => {
    if (state === "home") {
      setHomePageActive(true);
      setOverviewPageActive(false);
      setClientsPageActive(false);
    } else if (state === "overview") {
      setHomePageActive(false);
      setOverviewPageActive(true);
      setClientsPageActive(false);
    } else if (state === "our-clients") {
      setHomePageActive(false);
      setOverviewPageActive(false);
      setClientsPageActive(true);
    }
  };
  const [homePageActive, setHomePageActive] = useState(true);
  const [overviewPageActive, setOverviewPageActive] = useState(false);
  const [clientsPageActive, setClientsPageActive] = useState(false);
  const {
    btnHome,
    containerNavigationLinks,
    btnClient,
    btnOverview,
    colorWhite,
    spanNavLinks,
    linkRouter,
  } = style;
  return (
    <div className={containerNavigationLinks}>
      <span className={spanNavLinks} id={btnHome}>
        <Link
          to="/home"
          className={linkRouter}
          id={homePageActive ? colorWhite : null}
          onClick={() => handleClick("home")}
        >
          HOME
        </Link>
      </span>
      <ImgPoint />

      <span className={spanNavLinks} id={btnOverview}>
        <Link
          to="/overview"
          className={linkRouter}
          id={overviewPageActive ? colorWhite : null}
          onClick={() => handleClick("overview")}
        >
          OVERVIEW
        </Link>
      </span>
      <ImgPoint />
      <span className={spanNavLinks} id={btnClient}>
        <Link
          to="/our-clients"
          className={linkRouter}
          id={clientsPageActive ? colorWhite : null}
          onClick={() => handleClick("our-clients")}
        >
          OUR CLIENTS
        </Link>
      </span>
    </div>
  );
};

export default NavigationLinks;
