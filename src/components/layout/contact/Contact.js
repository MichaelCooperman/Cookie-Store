import React, { useRef } from "react";
import classes from "../../../main.module.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = () => {};

  return (
    <section id="Contact" className={classes["contact-section"]}>
      <div className={classes["contact-title"]}>
        <h1>Contact Us!</h1>
      </div>
      <div className={classes["contactus-wrapper"]}>
        <div className={classes["contact-container"]}>
          <h1>Send Us An Email</h1>
          <form ref={formRef} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              placeholder="Your Message to us..."
              name="message"
              cols="30"
              rows="10"
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
