import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import ImgPoint from "../ImgPoint";
import { Link } from "react-router-dom";

const NavigationLinks = ({ pageActive }) => {
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
          id={pageActive === "home" ? colorWhite : null}
        >
          HOME
        </Link>
      </span>
      <ImgPoint />

      <span className={spanNavLinks} id={btnOverview}>
        <Link
          to="/overview"
          className={linkRouter}
          id={pageActive === "overview" ? colorWhite : null}
        >
          OVERVIEW
        </Link>
      </span>
      <ImgPoint />
      <span className={spanNavLinks} id={btnClient}>
        <Link
          to="/our-clients"
          className={linkRouter}
          id={pageActive === "our-clients" ? colorWhite : null}
        >
          OUR CLIENTS
        </Link>
      </span>
    </div>
  );
};

export default NavigationLinks;
