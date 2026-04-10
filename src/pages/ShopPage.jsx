import React from 'react'

export default function ShopPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="heading-font text-5xl font-bold mb-8 text-yellow-100">Shop Our Collection</h1>
        <p className="text-gray-300 text-lg">Browse all our premium Punjabi fashion products.</p>
        
        {/* Placeholder for shop functionality */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="product-card">
              <div className="w-full h-64 bg-zinc-800 rounded-2xl mb-4 flex items-center justify-center">
                <i className="fa-solid fa-image text-4xl text-zinc-600"></i>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
