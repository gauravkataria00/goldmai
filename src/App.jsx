import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import StoresPage from './pages/StoresPage'
import VendorPanel from './pages/VendorPanel'
import CartPage from './pages/CartPage'

function App() {
  const [cartCount, setCartCount] = useState(3)

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/vendor" element={<VendorPanel />} />
          <Route path="/cart" element={<CartPage cartCount={cartCount} setCartCount={setCartCount} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
