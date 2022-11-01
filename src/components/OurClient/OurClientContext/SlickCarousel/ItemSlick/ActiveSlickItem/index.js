import React from "react";
import style from "./style.module.css";

const ActiveSlickItem = ({ item }) => {
  const { contextItem, titleItem, activeSlide, containerContext } = style;

  return (
    <div className={activeSlide}>
      <div>{item.code ? item.code : <img src={item.src} alt="" />}</div>
      <div className={containerContext}>
        <span className={titleItem}>{item.title}</span>
        <p className={contextItem}>{item.content}</p>
      </div>
    </div>
  );
};

export default ActiveSlickItem;
