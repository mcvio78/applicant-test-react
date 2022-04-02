import { useContext } from "react";

import { CartMainRow } from "../components/CartMainRow";
import { CartBookRow } from "../components/CartBookRow";
import { CartContext } from "../state/context";

export const Cart = () => {
  const {
    state: {
      cart: { total },
    },
  } = useContext(CartContext);

  return (
    <div className="cart-list">
      <CartMainRow firstSlot="Name" secondSlot="Amount" thirdSlot="Price" />
      <CartBookRow bookName="Black book" selectedAmount={2} price={298} />
      <CartMainRow firstSlot="Total" thirdSlot={`${total} CZK`} />
    </div>
  );
};
