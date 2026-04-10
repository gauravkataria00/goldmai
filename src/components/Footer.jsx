import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-yellow-900/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon.svg" alt="GOLDMAI" className="w-12 h-12"/>
              <span className="heading-font text-2xl font-bold text-yellow-100">GOLDMAI</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">India's largest fashion marketplace with 1000+ stores</p>
            <div className="flex gap-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition"><i className="fab fa-twitter text-xl"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link></li>
              <li><Link to="/stores" className="hover:text-yellow-400 transition">Stores</Link></li>
              <li><Link to="/vendor" className="hover:text-yellow-400 transition">Become a Vendor</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-3">Subscribe for exclusive offers</p>
            <input type="email" placeholder="Your email" className="w-full bg-zinc-900 border border-yellow-900 rounded-lg px-4 py-2 text-sm mb-3 focus:border-yellow-400 focus:outline-none transition" />
            <button className="gold-button w-full py-2 rounded-lg font-semibold text-sm">Subscribe</button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-yellow-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 GOLDMAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
