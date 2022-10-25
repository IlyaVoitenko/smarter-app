import React from "react";
import style from "./style.module.css";
import ImageRics from "./ImageRics";
import TextRics from "./TextRics";

const ImagesRics = () => {
  const { containerImagesRics } = style;
  return (
    <div className={containerImagesRics}>
      <ImageRics />
      <TextRics />
    </div>
  );
};

export default ImagesRics;
