import { useState } from "react";
import Header from "./components/layout/header/Header";
import SectionOne from "./components/layout/sectionone/SectionOne";
import SectionThree from "./components/layout/sectionthree/SectionThree";
import SectionTwo from "./components/layout/sectiontwo/SectionTwo";
import Cart from "./components/layout/cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCartHandler = () => {
    setCartIsActive(true);
  };

  const hideCartHandler = () => {
    setCartIsActive(false);
  };

  return (
    <CartProvider>
      {cartIsActive && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </CartProvider>
  );
}

export default App;
