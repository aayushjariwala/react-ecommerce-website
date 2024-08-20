import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import ShopCategory from './pages/ShopCategory';
import Footer from './components/footer/Footer';
import HEADER_BANNER from './components/assets/HEADER_BANNER.jpeg';
import black from './components/assets/black.jpeg';
import boy from './components/assets/boy.png';
import spider from './components/assets/spider.jpeg'




function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={HEADER_BANNER} category="men"/>} />
        <Route path="/womens" element={<ShopCategory banner={black} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={spider} category="kid"/>}  />
       
       
        <Route path="/product" element={<Product/>} >
         <Route path=":productId" element= {<Product/>}/>
        </Route>

         <Route path="/cart" element={<Cart/>} />
         <Route path="/login" element={<LoginSignup/>} />

      </Routes>
      <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
