import React, { useState } from 'react'

export default function StoreSuggestions() {
  const [savedStores, setSavedStores] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const suggestedStores = [
    { id: 1, name: 'GOLDMAI Delhi Store', city: 'Delhi', category: 'Phulkari Suits', rating: 4.9, followers: '2.8K', distance: '2.3 km', totalOrders: 2840, verified: true },
    { id: 2, name: 'GOLDMAI Mumbai Boutique', city: 'Mumbai', category: 'Designer Anarkali', rating: 4.7, followers: '2.1K', distance: '5.8 km', totalOrders: 2150, verified: true },
    { id: 3, name: 'GOLDMAI Bangalore Premium', city: 'Bangalore', category: 'Fusion Wear', rating: 4.8, followers: '1.8K', distance: '3.2 km', totalOrders: 1890, verified: true },
    { id: 4, name: 'GOLDMAI Amritsar Heritage', city: 'Amritsar', category: 'Traditional Kurtas', rating: 4.8, followers: '1.6K', distance: '12.5 km', totalOrders: 1650, verified: true },
    { id: 5, name: 'GOLDMAI Chandigarh Collection', city: 'Chandigarh', category: 'Ethnic Wear', rating: 4.8, followers: '1.5K', distance: '22.1 km', totalOrders: 1560, verified: true },
    { id: 6, name: 'GOLDMAI Pune Creations', city: 'Pune', category: 'Modern Fusion', rating: 4.7, followers: '1.2K', distance: '8.3 km', totalOrders: 1210, verified: true }
  ]

  const getStoreImage = (id) => `https://picsum.photos/500/700?random=${id * 15}`
  const getStoreAvatar = (id) => `https://picsum.photos/100/100?random=${id * 100}`

  const currentStore = suggestedStores[currentIndex]
  const isSaved = savedStores.includes(currentStore.id)
  const progress = ((currentIndex + 1) / suggestedStores.length) * 100

  const handleNext = () => {
    if (currentIndex < suggestedStores.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const toggleSave = () => {
    if (isSaved) {
      setSavedStores(savedStores.filter(id => id !== currentStore.id))
    } else {
      setSavedStores([...savedStores, currentStore.id])
    }
  }

  return (
    <section className="py-6 sm:py-12 min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 safe-area">
        {/* Header */}
        <div className="mb-4 sm:mb-8">
          <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-1 sm:mb-3">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              SUGGESTED
            </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-yellow-100 to-yellow-300 bg-clip-text text-transparent"> FOR YOU</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base px-2">Discover premium stores personalized just for you</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 sm:mb-6">
          <div className="h-0.5 sm:h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-xs mt-1 sm:mt-2 text-right">{currentIndex + 1} / {suggestedStores.length}</p>
        </div>

        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-center">
          {/* Navigation - Left */}
          <div className="hidden lg:block">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-yellow-600/50 md:hover:border-yellow-400 md:hover:bg-yellow-600/20 transition text-yellow-400 md:hover:text-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xl sm:text-2xl md:hover:scale-110 active:scale-95"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>

          {/* Main Store Card - Instagram Style */}
          <div className="relative col-span-1 mx-auto w-full max-w-xs sm:max-w-sm aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black group">
            {/* Store Image Background */}
            <img
              src={getStoreImage(currentStore.id)}
              alt={currentStore.name}
              loading="lazy"
              className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/80"></div>

            {/* Top Section - Verified Badge + Close */}
            <div className="absolute top-0 left-0 right-0 p-3 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {currentStore.verified && (
                  <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-black flex items-center gap-1">
                    <i className="fa-solid fa-check-circle text-xs"></i>
                    VERIFIED
                  </span>
                )}
              </div>
              <button className="text-white text-lg sm:text-xl opacity-70 md:hover:opacity-100 transition min-w-10 min-h-10">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Bottom Section - Store Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-between h-56 bg-gradient-to-t from-black via-black/80 to-transparent">
              {/* Store Details */}
              <div>
                {/* Avatar + Name + Category */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={getStoreAvatar(currentStore.id)}
                    alt={currentStore.name}
                    className="w-16 h-16 rounded-full border-3 border-yellow-400/70 object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-1 leading-tight">
                      {currentStore.name}
                    </h3>
                    <p className="text-yellow-300 text-sm font-bold mb-2">{currentStore.category}</p>
                    <p className="text-gray-300 text-xs flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-yellow-400"></i>
                      {currentStore.city} • {currentStore.distance}
                    </p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-yellow-400 font-black text-lg">{currentStore.rating}</p>
                    <p className="text-gray-400 text-xs">⭐ Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-400 font-black text-lg">{currentStore.followers}</p>
                    <p className="text-gray-400 text-xs">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-400 font-black text-lg">{(currentStore.totalOrders / 1000).toFixed(1)}k</p>
                    <p className="text-gray-400 text-xs">Orders</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Save/Like Button */}
                <button
                  onClick={toggleSave}
                  className={`flex-1 py-3 rounded-full font-black text-sm flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 ${
                    isSaved
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/50'
                      : 'bg-white/20 backdrop-blur text-white hover:bg-white/30 border border-white/30'
                  }`}
                >
                  <i className={`fa-solid fa-heart ${isSaved ? '' : 'fa-regular'}`}></i>
                  {isSaved ? 'SAVED' : 'SAVE'}
                </button>

                {/* Visit Button */}
                <button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-3 rounded-full font-black text-sm flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-600/50">
                  <i className="fa-solid fa-arrow-right"></i>
                  VISIT
                </button>
              </div>
            </div>
          </div>

          {/* Navigation - Right */}
          <div className="hidden lg:block text-right">
            <button
              onClick={handleNext}
              disabled={currentIndex === suggestedStores.length - 1}
              className="w-16 h-16 rounded-full border-2 border-yellow-600/50 hover:border-yellow-400 hover:bg-yellow-600/20 transition text-yellow-400 hover:text-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-2xl transform hover:scale-110 active:scale-95"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 py-4 rounded-xl border-2 border-yellow-600/50 hover:border-yellow-400 hover:bg-yellow-600/20 transition text-yellow-400 hover:text-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed font-black flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-chevron-left"></i>
            PREV
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === suggestedStores.length - 1}
            className="flex-1 py-4 rounded-xl border-2 border-yellow-600/50 hover:border-yellow-400 hover:bg-yellow-600/20 transition text-yellow-400 hover:text-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed font-black flex items-center justify-center gap-2"
          >
            NEXT
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Saved Stores Preview */}
        {savedStores.length > 0 && (
          <div className="mt-12 pt-8 border-t border-yellow-600/20">
            <p className="text-gray-400 text-sm font-bold mb-4">
              💾 SAVED STORES ({savedStores.length})
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {suggestedStores
                .filter(store => savedStores.includes(store.id))
                .map((store) => (
                  <button
                    key={store.id}
                    onClick={() => setCurrentIndex(suggestedStores.indexOf(store))}
                    className="relative h-32 rounded-2xl overflow-hidden group hover:scale-105 transition"
                  >
                    <img
                      src={getStoreImage(store.id)}
                      alt={store.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                      <p className="text-white text-xs font-bold line-clamp-1">{store.name}</p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
