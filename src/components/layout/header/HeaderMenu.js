import React from "react";
import classes from "../../../main.module.css";

const HeaderMenu = () => {
  return (
    <div className={classes["header-menu-wrapper"]}>
      <div className={classes.hamburger}>
        <span className={classes["hamburger-top"]}></span>
        <span className={classes["hamburger-middle"]}></span>
        <span className={classes["hamburger-bottom"]}></span>
      </div>
    </div>
  );
};

export default HeaderMenu;
