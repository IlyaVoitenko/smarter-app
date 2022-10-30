import React from "react";
import style from "./style.module.css";

const PrevArrow = ({ onClick }) => {
  const { positionArrow } = style;
  return (
    <div className={positionArrow} onWheel={onClick}>
      PrevArrow
    </div>
  );
};

export default PrevArrow;
