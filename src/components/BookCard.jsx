export const BookCard = ({
  src,
  alt,
  bookName,
  description,
  price,
  stockQuantity,
}) => {
  const stockQuantityNotification = (stockQuantityProp) => {
    if (stockQuantityProp === 0) return "Not available";
    if (stockQuantityProp > 5) return `${stockQuantity} in stock`;
    return "5+ in stock";
  };

  return (
    <div className="book-card">
      <img className="book-img" src={src} alt={alt} />
      <div className="book-name">{bookName}</div>
      <div className="book-description">{description}</div>
      <div className="book-selection">
        <div className="book-price">{price} CZK</div>
        <div>{stockQuantityNotification()}</div>
        <input
          className="book-input-section"
          type="number"
          defaultValue={0}
          min="0"
        />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};
