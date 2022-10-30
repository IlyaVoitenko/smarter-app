import React from "react";
import ItemSlick from "./ItemSlick";
import style from "./style.module.css";
import { cards } from "./data";

const SlickCarousel = () => {
  const { containerSlickCarousel } = style;

  return (
    <div className={containerSlickCarousel}>
      <ItemSlick images={cards} slidesToShow={3} />
    </div>
  );
};

export default SlickCarousel;
