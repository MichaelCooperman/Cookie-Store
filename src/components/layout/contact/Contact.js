import React, { useRef } from "react";
import classes from "../../../main.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89kgjki",
        "template_9gwn3i8",
        form.current,
        "K-P0Lrcjx9aic3gfj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="Contact" className={classes["contact-section"]}>
      <div className={classes["res-contact-top"]}>
        <div className={classes["contact-title"]}>
          <h1>Contact Us!</h1>
        </div>
      </div>
      <div className={classes["res-contact-main"]}>
        <div className={classes["contactus-wrapper"]}>
          <div className={classes["contact-container"]}>
            <h1>Send Us An Email</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className={classes["contact-form-fix-1"]}>
                <div className={classes["contactus-info-control"]}>
                  <input type="text" placeholder="Full Name" name="user_name" />
                </div>
                <div className={classes["contactus-info-control"]}>
                  <input type="text" placeholder="Email" name="user_email" />
                </div>
              </div>
              <div className={classes["contactus-info-control"]}>
                <input type="text" placeholder="Subject" name="subject" />
              </div>
              <div className={classes["contactus-info-control"]}>
                <textarea
                  placeholder="Your Message to us..."
                  name="message"
                  cols="30"
                  rows="10"
                />
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
