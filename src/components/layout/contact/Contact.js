import React, { useRef, useState } from "react";
import classes from "../../../main.module.css";

const noValue = (value) => value.trim() === "";
const isEmail = (value) => value.includes("@");

const Contact = (props) => {
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [subjectValue, setSubjectValue] = useState();
  const [messageValue, setMessageValue] = useState();

  const [emailFormIsValid, setEmailFormIsValid] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const sendMessageHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !noValue(enteredName);
    const enteredEmailIsValid = isEmail(enteredEmail);
    const enteredSubjectIsValid = !noValue(enteredSubject);
    const enteredMessageIsValid = !noValue(enteredMessage);

    setEmailFormIsValid({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      subject: enteredSubjectIsValid,
      message: enteredMessageIsValid,
    });

    const entireFormIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredSubjectIsValid &&
      enteredMessageIsValid;

    if (!entireFormIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    });

    setNameValue("");
    setEmailValue("");
    setSubjectValue("");
    setMessageValue("");
  };

  const nameControlClasses = `${classes["contactus-info-control"]} ${
    emailFormIsValid.name ? "" : classes["contactus-invalid"]
  }`;

  const emailControlClasses = `${classes["contactus-info-control"]} ${
    emailFormIsValid.email ? "" : classes["contactus-invalid"]
  }`;

  const subjectControlClasses = `${classes["contactus-info-control"]} ${
    emailFormIsValid.subject ? "" : classes["contactus-invalid"]
  }`;

  const messageControlClasses = `${classes["contactus-info-control"]} ${
    emailFormIsValid.message ? "" : classes["contactus-invalid"]
  }`;

  return (
    <section id="Contact" className={classes["contact-section"]}>
      <div className={classes["contact-title"]}>
        <h1>Contact Us!</h1>
      </div>
      <div className={classes["contactus-wrapper"]}>
        <div className={classes["contact-container"]}>
          <h1>Send Us An Email</h1>
          <form onSubmit={sendMessageHandler}>
            <div className={classes["contact-form-fix-1"]}>
              <div className={nameControlClasses}>
                <input
                  ref={nameInputRef}
                  type="text"
                  placeholder="Full Name"
                  id="user_name"
                  value={nameValue}
                />
                {!emailFormIsValid.name && <p>Please enter a valid Name!</p>}
              </div>
              <div className={emailControlClasses}>
                <input
                  ref={emailInputRef}
                  type="text"
                  placeholder="Email"
                  id="user_email"
                  value={emailValue}
                />
                {!emailFormIsValid.email && <p>Please enter a valid Email!</p>}
              </div>
            </div>
            <div className={subjectControlClasses}>
              <input
                ref={subjectInputRef}
                type="text"
                placeholder="Subject"
                id="subject"
                value={subjectValue}
              />
              {!emailFormIsValid.subject && (
                <p>Please enter a valid Subject!</p>
              )}
            </div>
            <div className={messageControlClasses}>
              <textarea
                ref={messageInputRef}
                placeholder="Your Message to us..."
                id="message"
                cols="30"
                rows="10"
                value={messageValue}
              />
              {!emailFormIsValid.message && (
                <p>Please enter a valid Message!</p>
              )}
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
