import { useState } from "react";
import Header from "./components/layout/header/Header";
import SectionOne from "./components/layout/sectionone/SectionOne";
import SectionThree from "./components/layout/sectionthree/SectionThree";
import SectionTwo from "./components/layout/sectiontwo/SectionTwo";
import Cart from "./components/layout/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/layout/about/About";
import Contact from "./components/layout/contact/Contact";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCartHandler = () => {
    setCartIsActive(true);
  };

  const hideCartHandler = () => {
    setCartIsActive(false);
  };

  const submitContactForm = (userInfo) => {
    fetch("https://cookies-21f67-default-rtdb.firebaseio.com/emails.json", {
      method: "POST",
      body: JSON.stringify({
        user: userInfo,
      }),
    });
  };

  return (
    <main>
      <CartProvider>
        {cartIsActive && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <SectionOne />
        <SectionTwo />
        <About />
        <Contact onConfirm={submitContactForm} />
        <SectionThree />
      </CartProvider>
    </main>
  );
}

export default App;
