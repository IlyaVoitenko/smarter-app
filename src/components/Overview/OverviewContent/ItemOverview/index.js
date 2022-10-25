import React from "react";
import style from "./style.module.css";

const ItemOverview = ({ item }) => {
  const {
    containerCardItem,
    itemText,
    itemTitle,
    containerTitle,
    imgItemOverview,
    iconCardItem,
    firstIconCardItem,
    containerIconCardItem,
    containerContextItemOverview,
  } = style;

  const { urlImage, title, text, id } = item;

  return (
    <div className={containerCardItem}>
      <div className={containerIconCardItem}>
        <img
          src={urlImage}
          className={id === 1 ? firstIconCardItem : iconCardItem}
        />
      </div>
      <div className={containerContextItemOverview}>
        <div className={containerTitle}>
          <img src="/image/Vector 5.png" className={imgItemOverview} />
          <span className={itemTitle}>{title}</span>
        </div>
        <p className={itemText}>{text}</p>
      </div>
    </div>
  );
};

export default ItemOverview;
