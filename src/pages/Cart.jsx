export const Cart = () => (
  <div className="cart-list">
    <div className="main-row">
      <div className="name">Name</div>
      <div className="amount">Amount</div>
      <div className="price">Price</div>
    </div>
    <div className="book-row">
      <div className="book-name">Black book</div>
      <div className="amount">
        2<button type="button">Remove</button>
      </div>
      <div className="price">598 CZK</div>
    </div>
    <div className="book-row">
      <div className="book-name">Red book</div>
      <div className="amount">
        1<button type="button">Remove</button>
      </div>
      <div className="price">499 CZK</div>
    </div>
    <div className="book-row">
      <div className="book-name">White book</div>
      <div className="amount">
        1<button type="button">Remove</button>
      </div>
      <div className="price">299 CZK</div>
    </div>
    <div className="main-row">
      <div>Total</div>
      <div>1396 CZK</div>
    </div>
  </div>
);
