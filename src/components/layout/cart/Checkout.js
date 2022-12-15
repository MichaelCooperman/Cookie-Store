import React, { useRef, useState } from "react";
import classes from "../../../main.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    firstName: true,
    lastName: true,
    street: true,
    postalCode: true,
    city: true,
    state: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isPostalCode(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStateIsValid = !isEmpty(enteredState);

    setFormInputIsValid({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
      state: enteredStateIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid &&
      enteredStateIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
      state: enteredState,
    });
  };

  const firstNameControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.firstName ? "" : classes["checkout-invalid"]
  }`;

  const lastNameControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.lastName ? "" : classes["checkout-invalid"]
  }`;

  const streetControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.street ? "" : classes["checkout-invalid"]
  }`;

  const postalCodeControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.postalCode ? "" : classes["checkout-invalid"]
  }`;

  const cityControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.city ? "" : classes["checkout-invalid"]
  }`;

  const stateControlClasses = `${classes["checkout-info-control"]} ${
    formInputIsValid.state ? "" : classes["checkout-invalid"]
  }`;

  return (
    <form className={classes["checkout-info-form"]} onSubmit={confirmHandler}>
      <div className={classes["checkout-info-wrapper"]}>
        <div className={firstNameControlClasses}>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" ref={firstNameInputRef} />
          {!formInputIsValid.firstName && (
            <p>Please enter a valid first name!</p>
          )}
        </div>
        <div className={lastNameControlClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" ref={lastNameInputRef} />
          {!formInputIsValid.lastName && <p>Please enter a valid last name!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formInputIsValid.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
          {!formInputIsValid.postalCode && (
            <p>Please enter a 5 digit postal code!</p>
          )}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formInputIsValid.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={stateControlClasses}>
          <label htmlFor="state">State</label>
          <input type="text" id="state" ref={stateInputRef} />
          {!formInputIsValid.state && <p>Please enter a valid state!</p>}
        </div>
      </div>
      <div className={classes["checkout-info-actions"]}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes["checkout-info-submit"]}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
