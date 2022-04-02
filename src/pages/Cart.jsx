import { useContext } from "react";

import { CartMainRow } from "../components/CartMainRow";
import { CartBookRow } from "../components/CartBookRow";
import { CartContext } from "../state/context";

export const Cart = () => {
  const {
    state: {
      cart: { total, selectedBooks },
      books,
    },
    removeTodoItem,
  } = useContext(CartContext);

  return (
    <div className="cart-list">
      <CartMainRow firstSlot="Name" secondSlot="Amount" thirdSlot="Price" />
      {selectedBooks &&
        Object.entries(selectedBooks).map(([id, selectedAmount]) => (
          <CartBookRow
            key={id}
            bookName={books[id].name}
            selectedAmount={selectedAmount}
            price={books[id].price}
            onClick={() => removeTodoItem(id)}
          />
        ))}
      <CartMainRow firstSlot="Total" thirdSlot={`${total} CZK`} />
    </div>
  );
};
