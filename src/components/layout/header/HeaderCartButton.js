import React, { useContext, useEffect, useState } from "react";
import classes from "../../../main.module.css";
import cart from "../../../images/checkoutcart.png";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsClicked, setBtnIsClicked] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes["checkout-wrapper"]} ${
    btnIsClicked ? classes["bump"] : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsClicked(true);

    const timer = setTimeout(() => {
      setBtnIsClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <React.Fragment>
      <nav className={classes["nav-bar"]}>
        <a href="#About">About</a>
        <a href="#Contact">Contact Us</a>
      </nav>
      <div className={btnClasses} onClick={props.onClick}>
        <button className={classes["checkoutcart-btn"]}>
          <img
            className={classes["checkoutcart"]}
            src={cart}
            alt="checkoutcart"
          />
          <span className={classes["badge"]}>{numberOfCartItems}</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default HeaderCartButton;
