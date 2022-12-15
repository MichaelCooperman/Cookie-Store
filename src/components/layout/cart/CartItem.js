import classes from "../../../main.module.css";

const CartItem = (props) => {
  //   const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <div className={classes["cart-helper"]}>
          <img
            className={classes["cart-cookie-img"]}
            src={props.image}
            alt="cookie-img"
          />

          <div className={classes["summary"]}>
            <h2>{props.name} Cookie</h2>
            <div>
              <span className={classes["price"]}>${props.price}</span>
              <span className={classes["amount"]}>x {props.amount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
};

export default CartItem;
