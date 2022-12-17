import React from "react";
import classes from "../../../main.module.css";
import OrderNow from "./OrderNow";

const SectionOne = () => {
  return (
    <div id="topOfPage" className={classes["section-one-wrapper"]}>
      <div className={classes["background"]}>
        <div className={classes["section-one-info"]}>
          <h1>Cookies,</h1>
          <h2>the Sweet Treat!</h2>
          <OrderNow />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
