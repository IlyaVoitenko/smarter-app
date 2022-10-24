import React from "react";
import style from "./style.module.css";
import SmarterText from "./SmarterText";
import TextCollectionApps from "./TextCollectionApps";
// import BtnWhiteDemo from "../../BtnWhiteDemo";

const SmarterDataText = () => {
  const { btnPosition } = style;
  console.log("SmarterDataText :", btnPosition);
  return (
    <div>
      <SmarterText />
      <TextCollectionApps />
      {/* <BtnWhiteDemo stylePosition={btnPosition} /> */}
    </div>
  );
};
export default SmarterDataText;
