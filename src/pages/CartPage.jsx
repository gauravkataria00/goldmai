import React from 'react'

export default function CartPage({ cartCount, setCartCount }) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="heading-font text-5xl font-bold mb-8 text-yellow-100">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-300 text-center py-12">You have {cartCount} items in cart</p>
              {/* Cart items will be populated here */}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 h-fit sticky top-28">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 border-t border-yellow-900/50 pt-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>₹{cartCount * 3500}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>₹200</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax</span>
                <span>₹{Math.floor(cartCount * 3500 * 0.18)}</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold text-yellow-400 mb-6 border-t border-yellow-900/50 pt-4">
              <span>Total</span>
              <span>₹{Math.floor(cartCount * 3500 + 200 + cartCount * 3500 * 0.18)}</span>
            </div>
            <button className="gold-button w-full py-3 rounded-lg font-semibold hover:shadow-xl transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
