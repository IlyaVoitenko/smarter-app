import React from "react";
import style from "./style.module.css";

const ImageBackCard = () => {
  const { containerImageBackCard } = style;
  return (
    <div className={containerImageBackCard}>
      <img src="/image/Rectangle 16.png" alt="" />
    </div>
  );
};

export default ImageBackCard;
