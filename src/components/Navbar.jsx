import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-yellow-600/40 sticky top-0 z-50 shadow-lg shadow-yellow-900/10">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 hover:opacity-90 transition-all duration-300 group">
            <img src="/logo.svg" alt="GOLDMAI" className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"/>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-9 text-lg font-medium flex-1 justify-center">
            <Link to="/" className="nav-link text-white hover:text-yellow-300 transition">Home</Link>
            <Link to="/stores" className="nav-link text-white hover:text-yellow-300 transition">Stores</Link>
            <Link to="/shop" className="nav-link text-white hover:text-yellow-300 transition">Shop</Link>
            <Link to="/vendor" className="nav-link text-white hover:text-yellow-300 transition">Vendor Panel</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block group">
              <input type="text" 
                     className="bg-zinc-900/80 border border-yellow-900 focus:border-yellow-400 rounded-full px-6 py-3 w-80 text-sm placeholder-gray-400 focus:outline-none transition-all"
                     placeholder="Search phulkari suits...">
              </input>
              <i className="fa-solid fa-magnifying-glass absolute right-5 top-3.5 text-yellow-400"></i>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative cursor-pointer hover:scale-110 transition">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <div className="w-9 h-9 bg-zinc-800 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition">
              👤
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-yellow-900/50 pt-4">
            <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
            <Link to="/stores" className="text-white hover:text-yellow-300">Stores</Link>
            <Link to="/shop" className="text-white hover:text-yellow-300">Shop</Link>
            <Link to="/vendor" className="text-white hover:text-yellow-300">Vendor Panel</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
