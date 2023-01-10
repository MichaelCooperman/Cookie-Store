import React from "react";
import classes from "../../../main.module.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="About" className={classes["about-section"]}>
      <div className={classes["res-about-top"]}>
        <div className={classes["about-title"]}>
          <h1>Learn More About Us!</h1>
        </div>
      </div>
      <div className={classes["res-about-main"]}>
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
