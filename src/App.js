import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components/NavBar/NavBar';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./CartContext/CartContext"
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer"
import Index from './components/Index/Index';
import Comprobantes from './components/Comprobantes/Comprobantes';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path='/detalles/:itemId' element={<ItemDetailContainer />} />
          <Route path='/sobre-nosotros' element={<SobreNosotros />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/comprobantes" element={<Comprobantes />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
