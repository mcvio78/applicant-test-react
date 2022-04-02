import cart from "../assets/cart.png";

export const Navbar = () => {
  const navigation = (event, path) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div className="navbar">
      <button
        className="navbar-item books-btn"
        type="button"
        onClick={(event) => navigation(event, "/")}
      >
        Books
      </button>
      <button
        className="navbar-item"
        type="button"
        onClick={(event) => navigation(event, "/")}
      >
        Awesome book store
      </button>
      <button
        className="navbar-item cart-btn"
        type="button"
        onClick={(event) => navigation(event, "/cart")}
      >
        <img src={cart} alt="cart" className="cart-img" />
      </button>
    </div>
  );
};
