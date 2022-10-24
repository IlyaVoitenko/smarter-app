import React from "react";
import style from "./style.module.css";
const TextCollectionApps = () => {
  const { textWorld, lineCollectionApps, containerCollectionApps, displayRow } =
    style;
  return (
    <div className={containerCollectionApps}>
      <div className={displayRow}>
        <hr className={lineCollectionApps}></hr>
        <span className={textWorld}>With the World’s Fastest</span>
      </div>
      <span className={textWorld}>Data Collection Apps</span>
    </div>
  );
};

export default TextCollectionApps;
