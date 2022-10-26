import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const NavigationLinks = ({ idLink, text, path }) => {
  const { spanNavLinks, linkRouter } = style;
  return (
    <span className={spanNavLinks} id={idLink}>
      <Link to={path} className={linkRouter}>
        {text}
      </Link>
    </span>
  );
};

export default NavigationLinks;
