import React from "react";
import classes from "../../../main.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderLogo from "./HeaderLogo";
// import HeaderMenu from "./HeaderMenu";

const Header = (props) => {
  return (
    <header className={classes["header-container"]}>
      <div className={classes["header"]}>
        {/* <HeaderMenu /> */}
        <HeaderLogo />
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
