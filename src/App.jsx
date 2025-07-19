import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './component/Footer'

import Navbar from './component/Navbar'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetails'
import Category from './pages/Category'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
