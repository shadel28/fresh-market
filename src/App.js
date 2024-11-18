import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //usamos esto para poder navegar entre paginas en nuestra app
import Cart from "./pages/customer/Cart";
import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/customer/Login";
import Register from "./pages/customer/Register";
import { QueryClientProvider, QueryClient } from "react-query";
import { CartProvider } from "./components/context/CartContext";

const client = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
