import React from "react";
import style from "./style.module.css";

const MainText = () => {
  const { textMainText, colorBackTextBlue } = style;
  return (
    <div>
      <span className={textMainText}>
        Streamlining building <span className={colorBackTextBlue}>asset</span>{" "}
        data collection & validation – Creating live and accurate asset data
      </span>
    </div>
  );
};

export default MainText;
