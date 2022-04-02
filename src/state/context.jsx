import { createContext, useReducer, useMemo } from "react";

import { reducer } from "./reducer";
import { initialState } from "./state";
import { actionTypes } from "./actions";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      state: state,
      addBookToCart: (selectedBookID, amount) => {
        dispatch({
          type: actionTypes.ADD_BOOK_TO_CART,
          selectedBookID,
          amount,
        });
      },
      removeTodoItem: (selectedBookID) => {
        dispatch({ type: actionTypes.REMOVE_BOOK_FROM_CART, selectedBookID });
      },
    }),
    [state, dispatch]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
