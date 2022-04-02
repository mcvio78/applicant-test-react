export const CartMainRow = ({ firstSlot, secondSlot, thirdSlot }) => (
  <div className="main-row">
    <div className="name">{firstSlot}</div>
    {secondSlot && <div className="amount">{secondSlot}</div>}
    {thirdSlot && <div className="price">{thirdSlot}</div>}
  </div>
);
