import React, { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ name, price: precio, description, id }) => {
  const price = `$${precio.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      precio,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};
