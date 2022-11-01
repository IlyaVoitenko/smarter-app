import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import ImgPoint from "../ImgPoint";

const NavigationLinks = ({ pageActive }) => {
  const [ourClientPageActive, setOurClientPageActive] = useState(false);
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
      {!ourClientPageActive ? (
        <span className={spanNavLinks} id={btnHome}>
          <Link
            to="/home"
            className={linkRouter}
            onClick={() => setOurClientPageActive(false)}
            id={pageActive === "home" ? colorWhite : null}
          >
            HOME
          </Link>
        </span>
      ) : null}
      {!ourClientPageActive ? <ImgPoint /> : null}
      {!ourClientPageActive ? (
        <span className={spanNavLinks} id={btnOverview}>
          <Link
            to="/overview"
            className={linkRouter}
            onClick={() => setOurClientPageActive(false)}
            id={pageActive === "overview" ? colorWhite : null}
          >
            OVERVIEW
          </Link>
        </span>
      ) : null}

      {!ourClientPageActive ? <ImgPoint /> : null}
      <span className={spanNavLinks} id={btnClient}>
        <Link
          to="/our-clients"
          className={linkRouter}
          onClick={() => setOurClientPageActive(true)}
          id={pageActive === "our-clients" ? colorWhite : null}
        >
          OUR CLIENTS
        </Link>
      </span>
      {ourClientPageActive ? <ImgPoint /> : null}
      {ourClientPageActive ? (
        <span className={spanNavLinks} id={btnClient}>
          <Link
            to="/how-it-work"
            className={linkRouter}
            id={pageActive === "how-it-work" ? colorWhite : null}
          >
            HOW IT WORKS
          </Link>
        </span>
      ) : null}
      {ourClientPageActive ? <ImgPoint /> : null}
      {ourClientPageActive ? (
        <span className={spanNavLinks} id={btnClient}>
          <Link
            to="/our-story"
            className={linkRouter}
            id={pageActive === "our-story" ? colorWhite : null}
          >
            OUR STORY
          </Link>
        </span>
      ) : null}
    </div>
  );
};

export default NavigationLinks;
