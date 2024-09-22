import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //usamos esto para poder navegar entre paginas en nuestra app
// import Cart from './pages/customer/Cart';
// import Home from './pages/customer/Home';
import Cart from './pages/customer/Cart';
import Home from './pages/customer/Home';
import Products from './pages/customer/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
