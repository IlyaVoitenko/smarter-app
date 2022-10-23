import React from "react";
import style from "./style.module.css";
const SmarterText = () => {
  const { textSmarterText, containerSmarterText } = style;
  return (
    <div className={containerSmarterText}>
      <span className={textSmarterText}>SMARTER</span>
      <br></br>
      <span className={textSmarterText} id={style.textPropery}>
        PROPERTY
      </span>
      <br></br>
      <span className={textSmarterText} id={style.textData}>
        DATA
      </span>
    </div>
  );
};

export default SmarterText;
