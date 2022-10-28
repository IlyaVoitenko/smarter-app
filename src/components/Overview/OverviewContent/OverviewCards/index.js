import React from "react";
import ItemOverview from "../ItemOverview";
import style from "./style.module.css";

const OverviewCards = () => {
  const { containerOverviewCards } = style;

  const cards = [
    {
      id: 1,
      urlImage: "/image/Pyramid_1_-_Tall0011.png",
      title: "Update",
      text: "Easily keep your asset data accurate, establishing a quality live data feed",
    },

    {
      id: 2,
      urlImage: "/image/empoverIcon.png",
      title: "Empower",
      text: "Connect Ai Assets to your existing system, to ensure you’re always working off quality, up to date data",
    },
    {
      id: 3,
      urlImage: "/image/Platonic_3_-_Icosa0011.png",
      title: "Collect",
      text: "Quickly & efficiently collect building asset data, reducing your workload by up to 80% ",
    },
  ];
  return (
    <div className={containerOverviewCards}>
      {cards
        .map((item) => <ItemOverview item={item} key={item.id} />)
        .reverse()}
    </div>
  );
};

export default OverviewCards;
