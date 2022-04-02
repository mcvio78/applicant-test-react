import { useContext } from "react";

import { BookCard } from "../components/BookCard";
import { CartContext } from "../state/context";

export const Home = () => {
  const {
    state: { books },
  } = useContext(CartContext);

  return (
    <div className="book-list">
      {books &&
        Object.entries(books).map(([id, book]) => (
          <BookCard
            key={id}
            id={id}
            src={book.src}
            alt={book.alt}
            bookName={book.name}
            description={book.description}
            price={book.price}
            stockQuantity={book.stockQuantity}
          />
        ))}
    </div>
  );
};
