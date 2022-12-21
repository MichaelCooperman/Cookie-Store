import React from "react";
import classes from "../../../main.module.css";

const AboutCard = () => {
  return (
    <div className={classes["about-cards-wrapper"]}>
      <div className={classes["about-cards"]}>
        <h1>History</h1>
        <p>
          Daydream Cookies was first founded in 1924. The Original owner Michael
          Cooperman started in his own kitchen where he found his true passion
          for cookies. He would go around his local town sharing his cookies to
          get people to vote on their favorite recipe. Once he had enough people
          test the cookies there was a clear winner. To this day the secret
          ingredient put into the cookies has not been released to the public.
        </p>
      </div>
      <div className={classes["about-card-middle"]}>
        <h1>Our Mission</h1>
        <p>
          One of the main goals of Daydream Cookies is to have the customers
          select various different flavors of cookies to add to their own custom
          order list. With this order list we will deliver at random (up to 5
          times a month) and we will ship them out as a surprise box. At a low
          montly price depending on the package you sign up for. Here at
          Daydream cookies we want you to have the best cookie experience ever!
        </p>
      </div>
      <div className={classes["about-cards"]}>
        <h1>Fun Cookie Information</h1>
        <p>
          Daydream cookies have over 100,000 cookies baked per month. All
          cookies are delievered fast and keep their warmth throughout the trip
          to your house. Ever wonder how we ship the cookies so fast? Well we
          now use drones! With new advancements in technology we have over 1,000
          cookie drones that deliver within 4 hours of your order being placed.
          Another fun fact is Daydream cookies is the first cookie company to go
          international. Order any where and any time.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
