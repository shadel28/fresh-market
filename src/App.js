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
import LoginEmployee from "./pages/employee/LoginEmployee";
import Inventory from "./pages/employee/Inventory";
import Purchases from "./pages/employee/Purchases";
import Supplier from "./pages/employee/Supplier";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ProductsProvider } from "./components/context/ProductsContext";

const client = new QueryClient();
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CartProvider>
            <ProductsProvider>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/login-employee" element={<LoginEmployee />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/purchases" element={<Purchases />} />
                  <Route path="/supplier" element={<Supplier />} />
                </Routes>
              </BrowserRouter>
            </ProductsProvider>
          </CartProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
