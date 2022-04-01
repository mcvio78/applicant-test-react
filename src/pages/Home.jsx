import { BookCard } from "../components/BookCard";

export const Home = () => {
  return (
    <div className="book-list">
      <BookCard
        src="./book-black.jpg"
        alt="black book"
        bookName="black book"
        description="Awesome book with black cover!"
        price={299}
        stockQuantity={3}
      />
    </div>
  );
};
