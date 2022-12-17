import React from "react";
import classes from "../../../main.module.css";

const OrderNow = () => {
  return (
    <button className={classes["ordernow-btn"]}>
      <a href="#Order">Order Today</a>
    </button>
  );
};

export default OrderNow;
