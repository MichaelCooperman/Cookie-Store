import React from "react";
import classes from "../../../main.module.css";
import facebook from "../../../images/facebook-icon.png";
import instagram from "../../../images/instagram-icon.png";
import twitter from "../../../images/twitter-icon.png";
import youtube from "../../../images/youtube-icon.png";

const SectionThree = () => {
  return (
    <div className={classes["section-three-wrapper"]}>
      <div className={classes["section-three-top"]}>
        <div className={classes["section-three-left"]}>
          <a href="null">Locations</a>

          <a href="null">About Us</a>
          <a href="null">Ship Cookies</a>
          <a href="null">Email</a>
        </div>
        <div className={classes["section-three-right"]}>
          <div className={classes["icon-container"]}>
            <a href="null">
              <img
                className={classes["icon-size"]}
                src={facebook}
                alt="facebook-icon"
              />
            </a>

            <a href="null">
              <img
                className={classes["icon-size"]}
                src={instagram}
                alt="instagram-icon"
              />
            </a>

            <a href="null">
              <img
                className={classes["icon-size"]}
                src={twitter}
                alt="twitter-icon"
              />
            </a>

            <a href="null">
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
    </div>
  );
};

export default SectionThree;
