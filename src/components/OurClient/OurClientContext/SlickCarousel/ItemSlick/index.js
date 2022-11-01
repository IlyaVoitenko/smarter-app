import React, { useState } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

import ActiveSlickItem from "./ActiveSlickItem";
import UnactiveSlickItem from "./UnactiveSlickItem";

const ItemSlick = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div key={image.id}>
          {idx === imageIndex ? (
            <ActiveSlickItem item={image} />
          ) : (
            <UnactiveSlickItem item={image} />
          )}
        </div>
      );
    }
    return null;
  });
  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ItemSlick;
