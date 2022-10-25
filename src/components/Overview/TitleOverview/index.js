import React from "react";
import style from "./style.module.css";

const TitleOverview = () => {
  const { postTitle, title, colorBackBlue } = style;
  return (
    <div>
      <h1 className={title}>overview</h1>
      <h5 className={postTitle}>
        AI Assets is <span className={colorBackBlue}>80% faster</span> than
        traditional methods of asset management and has a raft of other
        benefits.
      </h5>
    </div>
  );
};

export default TitleOverview;
