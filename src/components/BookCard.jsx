import { useContext, useState } from "react";
import { CartContext } from "../state/context";

export const BookCard = ({
  id,
  src,
  alt,
  bookName,
  description,
  price,
  stockQuantity,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const { addBookToCart } = useContext(CartContext);

  const stockQuantityNotification = () => {
    if (stockQuantity === 0) return "Not available";
    if (stockQuantity > 5) return "5+ in stock";
    return `${stockQuantity} in stock`;
  };

  const onChangeHandler = (event) => {
    if (event.target.value <= stockQuantity)
      setSelectedAmount(() => Number(event.target.value));
  };

  return (
    <div className="book-card">
      <img className="book-img" src={src} alt={alt} />
      <div className="book-name">{bookName}</div>
      <div className="book-description">{description}</div>
      <div className="book-selection">
        <div className="book-price">{price} CZK</div>
        <div className={stockQuantity === 0 ? "book-unavailable" : null}>
          {stockQuantityNotification()}
        </div>
        <input
          className="book-input-section"
          type="number"
          value={selectedAmount}
          min={0}
          max={stockQuantity}
          disabled={stockQuantity < 1}
          onChange={onChangeHandler}
        />
        <button
          className="book-add-section"
          type="button"
          onClick={() => {
            if (selectedAmount <= stockQuantity) {
              addBookToCart(id, selectedAmount);
              setSelectedAmount(0);
            }
          }}
          disabled={stockQuantity < 1 || selectedAmount === 0}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
