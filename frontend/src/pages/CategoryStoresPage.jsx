import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import StoreCard from '../components/StoreCard'
import { categories } from '../data/categories'
import { popularStores, storeLocations, stores } from '../data/stores'

export default function CategoryStoresPage({ selectedLocation = 'All' }) {
  const { name } = useParams()
  const isDataReady = Array.isArray(categories) && Array.isArray(stores) && Array.isArray(storeLocations)
  const categoryName = categories.find((entry) => entry.name.toLowerCase() === String(name).toLowerCase())?.name

  const [locationFilter, setLocationFilter] = useState(selectedLocation)
  const [ratingFilter, setRatingFilter] = useState('All')

  useEffect(() => {
    if (selectedLocation) {
      setLocationFilter(selectedLocation)
    }
  }, [selectedLocation])

  const visibleStores = useMemo(() => {
    const categoryStores = stores.filter((store) => store.category === categoryName)
    const byLocation =
      locationFilter === 'All'
        ? categoryStores
        : categoryStores.filter((store) => store.location === locationFilter)

    const baseStores =
      locationFilter === 'All'
        ? byLocation
        : byLocation.length > 0
          ? byLocation
          : popularStores.filter((store) => store.category === categoryName)

    const filteredByRating = baseStores.filter((store) => {
      return (
        ratingFilter === 'All' ||
        (ratingFilter === '4+' && store.rating >= 4) ||
        (ratingFilter === '4.5+' && store.rating >= 4.5)
      )
    })

    if (filteredByRating.length > 0) {
      return filteredByRating
    }

    return popularStores
      .filter((store) => store.category === categoryName)
      .filter((store) => (ratingFilter === '4.5+' ? store.rating >= 4.5 : store.rating >= 4))
      .slice(0, 8)
  }, [categoryName, locationFilter, ratingFilter])

  if (!isDataReady) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading...</div>
  }

  if (!name || !categoryName) {
    return <Navigate to="/categories" replace />
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Category</p>
          <h2 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">{categoryName} Stores</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Location-aware results with popular fallback for continuous browsing.</p>
        </div>
        <Link to="/categories" className="text-sm text-gold-300 hover:text-gold-200">Back to Categories</Link>
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900 sm:grid-cols-2 sm:p-5">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Location</label>
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          >
            {['All', ...storeLocations].map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Rating</label>
          <select
            value={ratingFilter}
            onChange={(event) => setRatingFilter(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          >
            <option value="All">All Ratings</option>
            <option value="4+">4.0+</option>
            <option value="4.5+">4.5+</option>
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">{visibleStores.length} stores found</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  )
}
