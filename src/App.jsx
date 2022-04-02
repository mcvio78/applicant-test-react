import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Provider } from "./state/context";

import "./styles.css";

function App() {
  const content = window.location.pathname === "/cart" ? <Cart /> : <Home />;

  return (
    <Provider>
      <Navbar />
      <div className="main-area">{content}</div>
    </Provider>
  );
}

export default App;
