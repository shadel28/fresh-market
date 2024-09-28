import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/customer/Cart';
import Home from './pages/customer/Home';
import Products from './pages/customer/Products';
import Catalogo from './pages/Products/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/catalogo' element={<Catalogo />}/>
        </Routes>
      </BrowserRouter>      
    </div>
    
    
     );
}

export default App;
