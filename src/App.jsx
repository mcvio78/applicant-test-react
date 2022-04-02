import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Provider } from "./state/context";
import { Route } from "./components/Route";

import "./styles.css";

function App() {
  return (
    <Provider>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Provider>
  );
}

export default App;
