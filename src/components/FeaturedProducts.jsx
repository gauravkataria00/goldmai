import React from 'react'

export default function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Phulkari Suit', price: '₹3,499', rating: 4.9, category: 'Women' },
    { id: 2, name: 'Anarkali Dress', price: '₹4,199', rating: 4.8, category: 'Women' },
    { id: 3, name: 'Pathani Kurta', price: '₹2,799', rating: 4.9, category: 'Men' },
    { id: 4, name: 'Fusion Top', price: '₹1,899', rating: 4.7, category: 'Women' }
  ]

  const getImageUrl = (id) => `https://picsum.photos/400/500?random=${id * 50}`

  return (
    <section className="py-28 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-600/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header - BIGGER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-font text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 bg-clip-text text-transparent mb-4 leading-tight">
              TRENDING NOW
            </h2>
            <p className="text-gray-300 text-lg font-medium">Handpicked from 1000+ premium stores • Updated daily</p>
          </div>
          <a href="/shop" className="gold-button px-8 py-4 rounded-2xl font-bold text-lg hover:scale-110 transition flex items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-yellow-600/40">
            <span>SHOP ALL</span>
            <i className="fa-solid fa-arrow-right-long text-lg"></i>
          </a>
        </div>

        {/* Products Grid - 4 items in 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-900/15 to-black/70 border-2 border-yellow-600/30 hover:border-yellow-400/70 transition-all duration-300 h-full flex flex-col hover:shadow-3xl hover:shadow-yellow-600/30 hover:scale-105">
                {/* Image Container - BIGGER */}
                <div className="relative overflow-hidden h-72 md:h-80 bg-gradient-to-br from-yellow-900/25 to-black/50">
                  <img
                    src={getImageUrl(product.id)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition duration-300"></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/15 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Category Badge - BIGGER */}
                  <span className="absolute top-5 left-5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-5 py-2 rounded-full text-sm font-black shadow-lg">
                    {product.category}
                  </span>

                  {/* Quick Add Button - BIGGER */}
                  <button className="absolute bottom-5 right-5 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-xl transform group-hover:scale-125 group-hover:translate-y-0 translate-y-5">
                    <i className="fa-solid fa-plus text-xl font-bold"></i>
                  </button>
                </div>

                {/* Content - BIGGER */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-yellow-100 group-hover:text-yellow-300 transition line-clamp-2 mb-3">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-yellow-600/40 group-hover:border-yellow-500/60 transition">
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-star text-yellow-400 text-lg"></i>
                      <span className="text-lg text-yellow-100 font-black">{product.rating}</span>
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-yellow-400 group-hover:text-yellow-300">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
