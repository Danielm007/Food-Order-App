import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      {show && <Cart onCloseCart={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
