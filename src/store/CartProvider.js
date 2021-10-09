import React, { useReducer } from "react";
import { CartContext } from "./cart-context";
import { cartReducer } from "./cart-reducer";

//Estado inicial
const initialState = {
  items: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
