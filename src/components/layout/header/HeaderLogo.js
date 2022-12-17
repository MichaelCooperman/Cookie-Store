import React from "react";
import classes from "../../../main.module.css";

const HeaderLogo = () => {
  return (
    <div className={classes["logo-wrapper"]}>
      <h1>
        <a href="#topOfPage">Daydream Cookies</a>
      </h1>
    </div>
  );
};

export default HeaderLogo;
