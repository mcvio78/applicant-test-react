export const CartBookRow = ({ bookName, selectedAmount, price, onClick }) => (
  <div className="book-row">
    <div className="book-name">{bookName}</div>
    <div className="amount">
      {selectedAmount}
      <button type="button" onClick={onClick}>
        Remove
      </button>
    </div>
    <div className="price">{price * selectedAmount} CZK</div>
  </div>
);
