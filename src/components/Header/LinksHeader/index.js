import React from "react";
import style from "./style.module.css";
export const LinksHeader = () => {
  return (
    <div className={style.containerLinksHeader}>
      <button className={style.btnLinksHeader} id={style.btnHome}>
        Home
      </button>
      <button className={style.btnLinksHeader} id={style.btnClients}>
        Our Clients
      </button>
      <button className={style.btnLinksHeader} id={style.btnNews}>
        News
      </button>
      <button className={style.btnLinksHeader} id={style.btnCases}>
        Cases
      </button>
      <button className={style.btnLinksHeader} id={style.btnPricing}>
        Pricing
      </button>
      <button className={style.btnLinksHeader} id={style.Contact}>
        Contact
      </button>
    </div>
  );
};
export default LinksHeader;
