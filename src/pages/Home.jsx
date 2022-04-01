export const Home = () => {
  return (
    <div className="book-list">
      <div className="book-card">
        <img className="book-img" src="./book-black.jpg" alt="black book" />
        <div className="book-name">Black book</div>
        <div className="book-description">Awesome book with black cover!</div>
        <div className="book-selection">
          <div className="book-price">299 CZK</div>
          <div>5+ in stock</div>
          <input
            className="book-input-section"
            type="number"
            defaultValue={0}
          />
          <button className="book-add-section" type="button">
            Add to cart
          </button>
        </div>
      </div>
      <div className="book-card">
        <img className="book-img" src="./book-blue.jpg" alt="blue book" />
        <div className="book-name">Blue book</div>
        <div className="book-description">
          Literally awesomeness itself with blue cover.
        </div>
        <div className="book-price">310 CZK</div>
        <div>3 in stock</div>
        <input type="number" defaultValue={0} />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
      <div className="book-card">
        <img className="book-img" src="./book-green.jpg" alt="green book" />
        <div className="book-name">Green book</div>
        <div className="book-description">
          Great book with cover like grass.
        </div>
        <div className="book-price">310 CZK</div>
        <div className="book-unavailable">Not available</div>
        <input type="number" defaultValue={0} />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
      <div className="book-card">
        <img className="book-img" src="./book-red.jpg" alt="red book" />
        <div className="book-name">Red book</div>
        <div className="book-description">A book full of secrets.</div>
        <div className="book-price">499 CZK</div>
        <div>1 in stock</div>
        <input type="number" defaultValue={0} />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
      <div className="book-card">
        <img className="book-img" src="./book-white.jpg" alt="white book" />
        <div className="book-name">White book</div>
        <div className="book-description">
          A book with white cover - great for personal drawings!
        </div>
        <div className="book-price">199 CZK</div>
        <div>5+ in stock</div>
        <input type="number" defaultValue={0} />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
      <div className="book-card">
        <img className="book-img" src="./book-yellow.jpg" alt="yellow book" />
        <div className="book-name">Yellow book</div>
        <div className="book-description">Very sunny book for you!</div>
        <div className="book-price">299 CZK</div>
        <div className="book-unavailable">Not available</div>
        <input type="number" defaultValue={0} />
        <button className="book-add-section" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};
