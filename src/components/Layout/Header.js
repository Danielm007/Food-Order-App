import React from "react";
import styles from "./Header.module.css";
import image from "../../assets/meals.jpg";
import { HeaderCardButton } from "./HeaderCardButton";

export const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="Background" />
      </div>
    </>
  );
};
