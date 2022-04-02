import { actionTypes } from "./actions";

const addBookToCart = (state, action) => {
  return {
    ...state,
    cart: {
      ...state.cart,
      selectedBooks: {
        ...state.cart.selectedBooks,
        ...(!state.cart.selectedBooks[action.selectedBookID]
          ? { [action.selectedBookID]: action.amount }
          : {
              [action.selectedBookID]:
                state.cart.selectedBooks[action.selectedBookID] + action.amount,
            }),
      },
      total:
        state.cart.total +
        state.books[action.selectedBookID].price * action.amount,
    },
    books: {
      ...state.books,
      [action.selectedBookID]: {
        ...state.books[action.selectedBookID],
        stockQuantity:
          state.books[action.selectedBookID].stockQuantity - action.amount,
      },
    },
  };
};

const removeBookFromCart = (state, action) => {
  return {
    ...state,
    cart: {
      ...state.cart,
      selectedBooks: {
        ...Object.keys(state.cart.selectedBooks).reduce((newObj) => {
          if (state.cart.selectedBooks[action.selectedBookID] > 1) {
            return {
              ...state.cart.selectedBooks,
              [action.selectedBookID]:
                state.cart.selectedBooks[action.selectedBookID] - 1,
            };
          }
          if (state.cart.selectedBooks[action.selectedBookID] === 1) {
            const { [action.selectedBookID]: removedProperty, ...restObject } =
              state.cart.selectedBooks;
            return restObject;
          }
          return newObj;
        }, {}),
      },
      total: state.cart.total - state.books[action.selectedBookID].price,
    },
    books: {
      ...state.books,
      [action.selectedBookID]: {
        ...state.books[action.selectedBookID],
        stockQuantity: state.books[action.selectedBookID].stockQuantity + 1,
      },
    },
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK_TO_CART:
      return addBookToCart(state, action);

    case actionTypes.REMOVE_BOOK_FROM_CART:
      return removeBookFromCart(state, action);

    default:
      throw new Error();
  }
};
