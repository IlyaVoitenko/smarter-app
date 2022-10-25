import React from "react";
import style from "./style.module.css";
const ImageRics = () => {
  const { containerImageRics } = style;
  return (
    <div className={containerImageRics}>
      <img src="/image/rics.png" />
    </div>
  );
};

export default ImageRics;
