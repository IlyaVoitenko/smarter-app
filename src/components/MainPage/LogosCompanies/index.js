import React from "react";
import style from "./style.module.css";

const LogosCompanies = () => {
  const { imageLogosCompanies } = style;
  return (
    <div>
      <img
        src="/image/logosComoanies.png"
        className={imageLogosCompanies}
        alt=""
      />
    </div>
  );
};

export default LogosCompanies;
