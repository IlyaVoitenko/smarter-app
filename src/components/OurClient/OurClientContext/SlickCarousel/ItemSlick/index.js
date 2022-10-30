import React, { useState } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import style from "./style.module.css";

const ItemSlick = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const {
    slide,
    slideWrapper,
    containerItemSlick,
    contextItem,
    titleItem,
    activeSlide,
  } = style;

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
        <div
          className={idx === imageIndex ? activeSlide : slide}
          id={containerItemSlick}
          key={image.id}
        >
          <div className={slideWrapper}>
            {image.code ? image.code : <img src={image.src} alt="" />}
          </div>
          <div>
            <span className={titleItem}>{image.title}</span>
            <p className={contextItem}>{image.content}</p>
          </div>
        </div>
      );
    }
    return null;
  });
  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ItemSlick;
