import React, { useContext } from "react";
import classes from "../../../main.module.css";
import MenuForm from "./MenuForm";
import CartContext from "../../store/cart-context";

const MenuCards = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      image: props.image,
      price: props.price,
    });
  };

  return (
    <div className={classes["menu-card"]}>
      <div>
        <img
          className={classes["menu-image"]}
          src={props.image}
          alt="sugar-cookie"
        />
      </div>
      <div className={classes["menu-information"]}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className={classes["menu-extras"]}>
          <span>{props.price}ea</span>
          <span>{props.nutrition}cal</span>
        </div>
      </div>
      <MenuForm onAddToCart={addToCartHandler} />
    </div>
  );
};

export default MenuCards;
