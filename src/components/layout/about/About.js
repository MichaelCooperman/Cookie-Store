import React from "react";
import classes from "../../../main.module.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="About" className={classes["about-section"]}>
      <div className={classes["about-title"]}>
        <h1>Learn More About Us!</h1>
      </div>
      <AboutCard />
    </section>
  );
};

export default About;
