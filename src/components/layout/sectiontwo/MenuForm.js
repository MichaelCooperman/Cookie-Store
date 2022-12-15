import React, { useRef, useState } from "react";
import Input from "./Input";
import classes from "../../../main.module.css";

const MenuForm = (props) => {
  const [amountIsVaild, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes["menu-form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add To Cart</button>
      {!amountIsVaild && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MenuForm;
