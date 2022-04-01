import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

import "./styles.css";

function App() {
  const content = window.location.pathname === "/cart" ? <Cart /> : <Home />;

  return (
    <>
      <Navbar />
      <div className="main-area">{content}</div>
    </>
  );
}

export default App;
