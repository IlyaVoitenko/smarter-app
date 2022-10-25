import React from "react";
import style from "./style.module.css";

const LinesTrustBlock = () => {
  const { firstLine, secondLine } = style;
  return (
    <div>
      <hr className={firstLine}></hr>
      <hr className={secondLine}></hr>
    </div>
  );
};

export default LinesTrustBlock;
