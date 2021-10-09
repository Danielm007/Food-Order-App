import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    >
      {item.name}
    </CartItem>
  ));

  return (
    <Modal onClose={onCloseCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
