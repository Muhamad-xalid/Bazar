import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar  from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products'
import Product from './Pages/Product'
function App() {
  return (
    <div className="">
      <Navbar/>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="About" element={<About />} />
             <Route path="Contact" element={<Contact/>} />
             <Route path="Products" element={<Products/>} />
             <Route path="Products/:id" element={<Product/>} />
          </Routes>
    </div>
  );
}

export default App;
