import React from "react";
import classes from "../../../main.module.css";

const MenuButton = () => {
  return (
    <div className={classes["menu-buttons"]}>
      <button>
        <span>+</span>
      </button>
      <button>
        <span>-</span>
      </button>
    </div>
  );
};

export default MenuButton;
