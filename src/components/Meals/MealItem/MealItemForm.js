import React, { useRef, useState } from "react";
import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export const MealItemForm = ({ id, onAddToCart }) => {
  const inputRef = useRef();
  const [isValid, setisValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setisValid(false);
      return;
    }

    setisValid(true);

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Ammount"
        ref={inputRef}
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  );
};
