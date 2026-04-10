import React from 'react'

export default function StoreCard({ store }) {
  const imageUrl = `https://picsum.photos/500/600?random=${store.id}`
  const avatarUrl = `https://picsum.photos/200/200?random=${store.id * 100}`

  return (
    <div className="group relative bg-gradient-to-br from-yellow-900/10 to-black/80 rounded-3xl overflow-hidden border-2 border-yellow-600/30 hover:border-yellow-400/70 transition-all duration-300 h-full flex flex-col hover:shadow-3xl hover:shadow-yellow-600/40 hover:scale-105">
      {/* Image Container - BIGGER */}
      <div className="relative overflow-hidden h-80 md:h-96 bg-gradient-to-br from-yellow-900/40 to-black/60">
        <img
          src={imageUrl}
          alt={store.shopName}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
        />
        
        {/* Premium Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-70 group-hover:opacity-50 transition duration-300"></div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/20 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Rating Badge - Top Right - BIGGER */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/80 backdrop-blur-xl px-4 py-2.5 rounded-full border-2 border-yellow-500/60 group-hover:bg-black/90 group-hover:border-yellow-400 transition shadow-lg">
          <i className="fa-solid fa-star text-yellow-400 text-lg"></i>
          <span className="text-yellow-100 font-black text-lg">{store.rating}</span>
        </div>

        {/* Verified Badge - Top Left */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black text-black shadow-lg">
            <i className="fa-solid fa-check-circle text-sm"></i>
            VERIFIED
          </span>
        </div>

        {/* Store Avatar - Bottom Left - BIGGER */}
        <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-black/90 backdrop-blur-xl px-4 py-3 rounded-full border-2 border-yellow-500/50 group-hover:border-yellow-400 transition shadow-xl">
          <img
            src={avatarUrl}
            alt={store.shopName}
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/70 group-hover:border-yellow-300"
          />
          <div className="hidden sm:block">
            <p className="text-yellow-100 font-black text-sm line-clamp-1">{store.shopName}</p>
            <p className="text-gray-400 text-xs">{store.address.city}</p>
          </div>
        </div>
      </div>

      {/* Content Section - BIGGER */}
      <div className="flex-1 p-7 flex flex-col justify-between">
        {/* Store Info */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-black text-yellow-100 group-hover:text-yellow-300 transition line-clamp-2 mb-3 leading-tight">
            {store.shopName}
          </h3>
          <p className="text-base text-gray-300 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-yellow-400 text-lg"></i>
            <span className="font-medium">{store.address.street}, {store.address.city}</span>
          </p>
        </div>

        {/* Stats Row - BIGGER */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-yellow-600/40 group-hover:border-yellow-500/60 transition">
          {/* Products */}
          <div className="text-center group/stat p-3 rounded-lg hover:bg-yellow-600/10 transition">
            <p className="text-3xl font-black text-yellow-400 group-hover/stat:text-yellow-300 transition">
              {store.products}
            </p>
            <p className="text-sm text-gray-400 font-semibold mt-1">Products</p>
          </div>

          {/* Orders */}
          <div className="text-center group/stat p-3 rounded-lg hover:bg-yellow-600/10 transition">
            <p className="text-3xl font-black text-yellow-400 group-hover/stat:text-yellow-300 transition">
              {(store.totalOrders / 1000).toFixed(1)}k
            </p>
            <p className="text-sm text-gray-400 font-semibold mt-1">Orders</p>
          </div>

          {/* Distance */}
          <div className="text-center group/stat p-3 rounded-lg hover:bg-yellow-600/10 transition">
            <p className="text-3xl font-black text-yellow-400 group-hover/stat:text-yellow-300 transition">
              {store.distance ? store.distance.toFixed(1) : '★'}
            </p>
            <p className="text-sm text-gray-400 font-semibold mt-1">{store.distance ? 'km' : 'Top'}</p>
          </div>
        </div>

        {/* Action Buttons - BIGGER */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-yellow-600/30 hover:bg-yellow-600/50 border-2 border-yellow-600/60 hover:border-yellow-500 text-yellow-400 hover:text-yellow-300 py-4 px-4 rounded-2xl font-bold text-base transition flex items-center justify-center gap-2 group/btn shadow-lg hover:scale-110">
            <i className="fa-solid fa-map text-xl"></i>
            <span className="hidden sm:inline">Map</span>
          </button>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-4 px-4 rounded-2xl font-black text-base transition flex items-center justify-center gap-2 group/btn shadow-xl hover:shadow-2xl hover:shadow-yellow-600/50 hover:scale-110">
            <span>Visit Store</span>
            <i className="fa-solid fa-arrow-right text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
