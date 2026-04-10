import React, { useState, useEffect } from 'react'
import StoreCard from '../components/StoreCard'

export default function StoresPage() {
  const [stores, setStores] = useState([])
  const [filteredStores, setFilteredStores] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchCity, setSearchCity] = useState('')
  const [userLocation, setUserLocation] = useState(null)
  const [tab, setTab] = useState('all')

  useEffect(() => {
    fetchAllStores()
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        () => console.log('Location access needed for nearby stores')
      )
    }
  }, [])

  const fetchAllStores = async () => {
    try {
      const mockStores = [
        { id: 1, shopName: 'GOLDMAI Delhi Store', address: { street: 'Connaught Place', city: 'Delhi', state: 'Delhi' }, rating: 4.9, totalOrders: 2840, latitude: 28.6295, longitude: 77.1895, products: 520, distance: 2.3 },
        { id: 2, shopName: 'GOLDMAI Mumbai Hub', address: { street: 'Bandra', city: 'Mumbai', state: 'Maharashtra' }, rating: 4.7, totalOrders: 2150, latitude: 19.0760, longitude: 72.8777, products: 490, distance: 5.8 },
        { id: 3, shopName: 'GOLDMAI Bangalore Center', address: { street: 'Koramangala', city: 'Bangalore', state: 'Karnataka' }, rating: 4.8, totalOrders: 1890, latitude: 12.9352, longitude: 77.6245, products: 410, distance: 3.2 },
        { id: 4, shopName: 'GOLDMAI Amritsar Store', address: { street: 'Golden Temple Road', city: 'Amritsar', state: 'Punjab' }, rating: 4.8, totalOrders: 1650, latitude: 31.6340, longitude: 74.8723, products: 450, distance: 12.5 },
        { id: 5, shopName: 'GOLDMAI Ludhiana Hub', address: { street: 'Mall Road', city: 'Ludhiana', state: 'Punjab' }, rating: 4.6, totalOrders: 1420, latitude: 30.9010, longitude: 75.8573, products: 380, distance: 18.9 },
        { id: 6, shopName: 'GOLDMAI Hyderabad Store', address: { street: 'Banjara Hills', city: 'Hyderabad', state: 'Telangana' }, rating: 4.5, totalOrders: 1340, latitude: 17.3850, longitude: 78.4867, products: 370, distance: null },
        { id: 7, shopName: 'GOLDMAI Pune Outlet', address: { street: 'Kalyani Nagar', city: 'Pune', state: 'Maharashtra' }, rating: 4.7, totalOrders: 1210, latitude: 18.5320, longitude: 73.8593, products: 360, distance: null },
        { id: 8, shopName: 'GOLDMAI Jaipur Store', address: { street: 'C Scheme', city: 'Jaipur', state: 'Rajasthan' }, rating: 4.6, totalOrders: 980, latitude: 26.9124, longitude: 75.7873, products: 340, distance: null },
        { id: 9, shopName: 'GOLDMAI Chandigarh Hub', address: { street: 'Sector 17', city: 'Chandigarh', state: 'Chandigarh' }, rating: 4.8, totalOrders: 1560, latitude: 30.7333, longitude: 76.7794, products: 420, distance: 22.1 },
        { id: 10, shopName: 'GOLDMAI Kolkata Store', address: { street: 'Park Street', city: 'Kolkata', state: 'West Bengal' }, rating: 4.4, totalOrders: 890, latitude: 22.5431, longitude: 88.3676, products: 330, distance: null },
        { id: 11, shopName: 'GOLDMAI Ahmedabad Center', address: { street: 'SG Highway', city: 'Ahmedabad', state: 'Gujarat' }, rating: 4.7, totalOrders: 1120, latitude: 23.0225, longitude: 72.5714, products: 350, distance: null },
        { id: 12, shopName: 'GOLDMAI Chennai Hub', address: { street: 'MG Road', city: 'Chennai', state: 'Tamil Nadu' }, rating: 4.6, totalOrders: 950, latitude: 13.0827, longitude: 80.2707, products: 340, distance: null }
      ]
      setStores(mockStores)
      setFilteredStores(mockStores)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching stores:', error)
      setLoading(false)
    }
  }

  const handleSearchCity = (e) => {
    const city = e.target.value
    setSearchCity(city)
    setTab('search')

    if (city.trim() === '') {
      setFilteredStores(stores)
    } else {
      const filtered = stores.filter(store => 
        store.address.city.toLowerCase().includes(city.toLowerCase()) ||
        store.address.state.toLowerCase().includes(city.toLowerCase())
      )
      setFilteredStores(filtered)
    }
  }

  const handleNearbyClick = () => {
    setTab('nearby')
    if (userLocation) {
      setFilteredStores(stores)
    } else {
      alert('Please enable location access')
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-black">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="heading-font text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
            GOLDMAI STORES
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover 1000+ premium stores across India. Find authentic fashion from emerging designers.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="glass rounded-2xl p-8 mb-16 border border-yellow-600/20 animate-slide-up-slow backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search by City */}
            <div>
              <label className="block text-yellow-100 mb-3 font-semibold">Search by City</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchCity}
                  onChange={handleSearchCity}
                  placeholder="Delhi, Mumbai, Amritsar..."
                  className="w-full bg-zinc-900/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition pl-10"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-3.5 text-yellow-400/50"></i>
              </div>
            </div>

            {/* Nearby Stores */}
            <div>
              <label className="block text-yellow-100 mb-3 font-semibold">Your Location</label>
              <button
                onClick={handleNearbyClick}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 rounded-lg px-4 py-3 text-black font-semibold transition shadow-lg hover:shadow-xl hover:shadow-yellow-600/30 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-location-dot"></i>
                Nearby Stores
              </button>
            </div>

            {/* Results Count */}
            <div>
              <label className="block text-yellow-100 mb-3 font-semibold">Available Stores</label>
              <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-yellow-100 font-bold text-2xl">{filteredStores.length}</span>
                <i className="fa-solid fa-store text-yellow-400 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Stores Grid - Instagram Style */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-600 border-t-yellow-300"></div>
              <p className="text-gray-300 mt-4">Loading stores...</p>
            </div>
          </div>
        ) : filteredStores.length === 0 ? (
          <div className="text-center py-20">
            <i className="fa-solid fa-store text-6xl text-yellow-600/30 mb-4"></i>
            <p className="text-gray-300 text-lg">No stores found in this location</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {filteredStores.map((store, index) => (
              <div
                key={store.id}
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <StoreCard store={store} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-slide-up-slow {
          animation: slideUp 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
