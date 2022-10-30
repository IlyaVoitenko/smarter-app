import React from "react";
import style from "./style.module.css";
const NextArrow = ({ onClick }) => {
  const { positionArrow } = style;
  return (
    <div className={positionArrow} onWheel={onClick}>
      NextArrow
    </div>
  );
};
export default NextArrow;
