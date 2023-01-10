import React from "react";
import classes from "../../../main.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderLogo from "./HeaderLogo";
// import HeaderMenu from "./HeaderMenu";

const Header = (props) => {
  return (
    <section className={classes["res-header"]}>
      <header className={classes["header-container"]}>
        <div className={classes["header"]}>
          {/* <HeaderMenu /> */}
          <HeaderLogo />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
    </section>
  );
};

export default Header;
