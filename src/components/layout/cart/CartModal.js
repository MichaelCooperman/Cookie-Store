import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../../../main.module.css";

const Backdrop = (props) => {
  return <div className={classes["backdrop"]} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes["modal"]}>
      <div className={classes["content"]}>{props.children}</div>
    </div>
  );
};

const portalDiv = document.getElementById("overlays");

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDiv)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDiv
      )}
    </Fragment>
  );
};

export default CartModal;
