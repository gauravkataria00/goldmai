import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StoreCard from './StoreCard'

export default function NearbyStoresSection() {
  const [nearbyStores, setNearbyStores] = useState([])
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          fetchNearbyStores(position.coords.latitude, position.coords.longitude)
        },
        () => {
          fetchFeaturedStores()
        }
      )
    } else {
      fetchFeaturedStores()
    }
  }, [])

  const fetchNearbyStores = (lat, lng) => {
    const allStores = [
      { id: 1, shopName: 'GOLDMAI Delhi Store', address: { street: 'Connaught Place', city: 'Delhi', state: 'Delhi' }, rating: 4.9, totalOrders: 2840, distance: 2.3, latitude: 28.6295, longitude: 77.1895, products: 520 },
      { id: 2, shopName: 'GOLDMAI Mumbai Hub', address: { street: 'Bandra', city: 'Mumbai', state: 'Maharashtra' }, rating: 4.7, totalOrders: 2150, distance: 5.8, latitude: 19.0760, longitude: 72.8777, products: 490 },
      { id: 3, shopName: 'GOLDMAI Bangalore Center', address: { street: 'Koramangala', city: 'Bangalore', state: 'Karnataka' }, rating: 4.8, totalOrders: 1890, distance: 3.2, latitude: 12.9352, longitude: 77.6245, products: 410 },
      { id: 4, shopName: 'GOLDMAI Amritsar Store', address: { street: 'Golden Temple Road', city: 'Amritsar', state: 'Punjab' }, rating: 4.8, totalOrders: 1650, distance: 12.5, latitude: 31.6340, longitude: 74.8723, products: 450 },
      { id: 5, shopName: 'GOLDMAI Chandigarh Hub', address: { street: 'Sector 17', city: 'Chandigarh', state: 'Chandigarh' }, rating: 4.8, totalOrders: 1560, distance: 22.1, latitude: 30.7333, longitude: 76.7794, products: 420 },
      { id: 6, shopName: 'GOLDMAI Pune Outlet', address: { street: 'Kalyani Nagar', city: 'Pune', state: 'Maharashtra' }, rating: 4.7, totalOrders: 1210, distance: 8.3, latitude: 18.5320, longitude: 73.8593, products: 360 }
    ]

    const sorted = allStores.sort((a, b) => a.distance - b.distance).slice(0, 6)
    setNearbyStores(sorted)
    setLoading(false)
  }

  const fetchFeaturedStores = () => {
    const featured = [
      { id: 1, shopName: 'GOLDMAI Delhi Store', address: { street: 'Connaught Place', city: 'Delhi', state: 'Delhi' }, rating: 4.9, totalOrders: 2840, distance: null, products: 520 },
      { id: 2, shopName: 'GOLDMAI Mumbai Hub', address: { street: 'Bandra', city: 'Mumbai', state: 'Maharashtra' }, rating: 4.7, totalOrders: 2150, distance: null, products: 490 },
      { id: 3, shopName: 'GOLDMAI Bangalore Center', address: { street: 'Koramangala', city: 'Bangalore', state: 'Karnataka' }, rating: 4.8, totalOrders: 1890, distance: null, products: 410 },
      { id: 4, shopName: 'GOLDMAI Amritsar Store', address: { street: 'Golden Temple Road', city: 'Amritsar', state: 'Punjab' }, rating: 4.8, totalOrders: 1650, distance: null, products: 450 },
      { id: 5, shopName: 'GOLDMAI Chandigarh Hub', address: { street: 'Sector 17', city: 'Chandigarh', state: 'Chandigarh' }, rating: 4.8, totalOrders: 1560, distance: null, products: 420 },
      { id: 6, shopName: 'GOLDMAI Pune Outlet', address: { street: 'Kalyani Nagar', city: 'Pune', state: 'Maharashtra' }, rating: 4.7, totalOrders: 1210, distance: null, products: 360 }
    ]
    setNearbyStores(featured)
    setLoading(false)
  }

  return (
    <section className="py-32 bg-gradient-to-b from-black via-black/90 to-black border-t border-yellow-900/30 relative">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header - BIGGER */}
        <div className="text-center mb-8 sm:mb-12 md:mb-20 animate-fade-in">
          <h2 className="heading-font text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 bg-clip-text text-transparent block leading-tight">
              DISCOVER PREMIUM
            </span>
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent block leading-tight">
              STORES NEAR YOU
            </span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-medium px-2">
            {userLocation ? '✨ Handpicked stores in your neighborhood' : '✨ Featured premium stores across India'}
          </p>
        </div>

        {/* Stores Grid - 6 stores, bigger cards */}
        {loading ? (
          <div className="text-center py-32">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-yellow-600 border-t-yellow-300"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {nearbyStores.map((store, index) => (
                <div
                  key={store.id}
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.15}s both`
                  }}
                  className="group"
                >
                  <StoreCard store={store} />
                </div>
              ))}
            </div>

            {/* See All Button - BIGGER */}
            <div className="text-center">
              <Link to="/stores" className="gold-button inline-flex items-center gap-3 px-14 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:shadow-yellow-600/50 transition hover:scale-110 active:scale-95 border border-yellow-400/30 hover:border-yellow-200">
                <span>EXPLORE ALL 1000+ STORES</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
