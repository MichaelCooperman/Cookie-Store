import React from "react";
import classes from "../../../main.module.css";

const HeaderLogo = () => {
  return (
    <div className={classes["logo-wrapper"]}>
      <h1>
        <a href="#topOfPage">Daydream Cookies</a>
      </h1>
      <nav className={classes["small-nav-bar"]}>
        <a href="#About">About</a>
        <a href="#Contact">Contact Us</a>
      </nav>
    </div>
  );
};

export default HeaderLogo;
