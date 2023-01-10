import React from "react";
import classes from "../../../main.module.css";
import facebook from "../../../images/facebook-icon.png";
import instagram from "../../../images/instagram-icon.png";
import twitter from "../../../images/twitter-icon.png";
import youtube from "../../../images/youtube-icon.png";

const SectionThree = () => {
  return (
    <section className={classes["res-section-three"]}>
      <footer className={classes["section-three-wrapper"]}>
        <div className={classes["section-three-top"]}>
          <div className={classes["section-three-left"]}>
            <a href="#Order">Order Today</a>
            <a href="#About">About Us</a>
            <a href="#Contact">Contact Us</a>
            <a href="#topOfPage">To The Top</a>
          </div>
          <div className={classes["section-three-right"]}>
            <div className={classes["icon-container"]}>
              <a href="https://www.facebook.com/">
                <img
                  className={classes["icon-size"]}
                  src={facebook}
                  alt="facebook-icon"
                />
              </a>

              <a href="https://www.instagram.com/">
                <img
                  className={classes["icon-size"]}
                  src={instagram}
                  alt="instagram-icon"
                />
              </a>

              <a href="https://twitter.com/">
                <img
                  className={classes["icon-size"]}
                  src={twitter}
                  alt="twitter-icon"
                />
              </a>

              <a href="https://www.youtube.com/">
                <img
                  className={classes["icon-size"]}
                  src={youtube}
                  alt="youtube-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={classes["section-three-bottom"]}>
          <h2>© 2022. All Rights Reserved</h2>
        </div>
      </footer>
    </section>
  );
};

export default SectionThree;
