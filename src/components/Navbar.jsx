import cart from "../assets/cart.png";

export const Navbar = () => (
  <div className="navbar">
    <button
      className="navbar-item books-btn"
      type="button"
      onClick={() => (window.location.href = "/")}
    >
      Books
    </button>
    <button
      className="navbar-item"
      type="button"
      onClick={() => (window.location.href = "/")}
    >
      Awesome book store
    </button>
    <button
      className="navbar-item cart-btn"
      type="button"
      onClick={() => (window.location.href = "cart")}
    >
      <img src={cart} alt="cart" className="cart-img" />
    </button>
  </div>
);
