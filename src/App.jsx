import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import { Routes, Route } from 'react-router-dom';
import men_banner from '../src/assets/banner_mens.png';
import women_banner from '../src/assets/banner_women.png';
import kids_banner from '../src/assets/banner_kids.png';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/men" element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category='kid'/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}/>
          </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<LoginSignup />}/>       
      </Routes>
      <Footer />
    </>
  )
}

export default App
