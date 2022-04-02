import { CartMainRow } from "../components/CartMainRow";
import { CartBookRow } from "../components/CartBookRow";

export const Cart = () => (
  <div className="cart-list">
    <CartMainRow firstSlot="Name" secondSlot="Amount" thirdSlot="Price" />
    <CartBookRow bookName="Black book" selectedAmount={2} price={298} />
    <CartMainRow firstSlot="Total" thirdSlot="1396 CZK" />
  </div>
);
