import React from "react";
import style from "./style.module.css";

const ImgPoint = () => {
  const { containerImgPoint, imgPoint } = style;
  return (
    <div className={containerImgPoint}>
      <img src="/image/Rectangle 20.png" className={imgPoint} alt="" />
    </div>
  );
};

export default ImgPoint;
