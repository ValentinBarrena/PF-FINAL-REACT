import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { CartContextProvider } from "./Context/cartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
