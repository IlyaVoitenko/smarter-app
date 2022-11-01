import React from "react";
import style from "./style.module.css";

const UnactiveSlickItem = ({ item }) => {
  const { containerUnactiveSlickItem } = style;
  return (
    <div className={containerUnactiveSlickItem}>
      <div>{item.code ? item.code : <img src={item.src} alt="" />}</div>
    </div>
  );
};

export default UnactiveSlickItem;
