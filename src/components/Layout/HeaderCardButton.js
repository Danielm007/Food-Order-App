import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

export const HeaderCardButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const badge = cartCtx.items.reduce((currentNumber, item) => {
    return (currentNumber += item.amount);
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClasses = `${styles.button} ${btnIsHighlighted && styles.bump}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{badge}</span>
    </button>
  );
};
