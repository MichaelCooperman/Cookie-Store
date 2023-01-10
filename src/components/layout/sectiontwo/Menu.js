import React, { useState, useEffect } from "react";
import classes from "../../../main.module.css";
import MenuCards from "./MenuCards";

const Menu = () => {
  const [cookies, setCookies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://cookies-21f67-default-rtdb.firebaseio.com/menu/cookies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedCookies = [];

      for (const key in responseData) {
        loadedCookies.push({
          id: key,
          description: responseData[key].description,
          image: responseData[key].image,
          ingredients: responseData[key].ingredients,
          name: responseData[key].name,
          nutrition: responseData[key].nutrition,
          price: responseData[key].price,
        });
      }

      setCookies(loadedCookies);
      setIsLoading(false);
    };

    fetchMenu().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes["cookies-loading"]}>
        <p>Loading Cookies...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes["cookies-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  const cookieCard = cookies.map((cookie) => (
    <MenuCards
      id={cookie.id}
      key={cookie.id}
      description={cookie.description}
      image={cookie.image}
      ingredients={cookie.ingredients}
      name={cookie.name}
      nutrition={cookie.nutrition}
      price={cookie.price}
    />
  ));

  return (
    <React.Fragment>
      {/* <div className={classes["menu-wrapper"]}> */}
      <section className={classes["res-section-two-top"]}>
        <div className={classes["breaker"]}>
          <h1>Baked Fresh Every Day.</h1>
          <p>Have Any Cookie Suggestions?</p>
          <a href="null">Click Here!</a>
        </div>
      </section>
      <section className={classes["res-section-two-main"]}>
        <div id="Order" className={classes["menu-results"]}>
          {cookieCard}
        </div>
      </section>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Menu;
