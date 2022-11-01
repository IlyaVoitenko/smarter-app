import React from "react";
import style from "./style.module.css";

const TitleClient = () => {
  const { textTitle, clientText } = style;
  return (
    <div>
      <div className={textTitle}>OUR</div>
      <div className={textTitle} id={clientText}>
        CLIENTS
      </div>
    </div>
  );
};

export default TitleClient;
