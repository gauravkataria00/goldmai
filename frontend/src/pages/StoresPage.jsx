import { useEffect, useMemo, useState } from 'react'
import StoreCard from '../components/StoreCard'
import { popularStores, storeLocations, stores } from '../data/stores'

export default function StoresPage({ selectedLocation, demoStores = [] }) {
  const [locationFilter, setLocationFilter] = useState(selectedLocation || 'All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [ratingFilter, setRatingFilter] = useState('All')
  const [searchFilter, setSearchFilter] = useState('')

  const isDataReady = Array.isArray(stores) && Array.isArray(storeLocations) && Array.isArray(demoStores)

  useEffect(() => {
    if (selectedLocation) {
      setLocationFilter(selectedLocation)
    }
  }, [selectedLocation])

  const allStores = useMemo(() => [...demoStores, ...stores], [demoStores])

  const categoryOptions = useMemo(
    () => ['All', ...Array.from(new Set(allStores.map((store) => store.category)))],
    [allStores],
  )

  const visibleStores = useMemo(() => {
    const searchValue = searchFilter.trim().toLowerCase()
    const locationScopedStores =
      locationFilter === 'All' ? allStores : allStores.filter((store) => store.location === locationFilter)

    const baseStores =
      locationFilter === 'All'
        ? locationScopedStores
        : locationScopedStores.length > 0
          ? locationScopedStores
          : popularStores

    const filtered = baseStores.filter((store) => {
      const categoryMatch = categoryFilter === 'All' || store.category === categoryFilter
      const searchMatch = !searchValue || store.name.toLowerCase().includes(searchValue)
      const ratingMatch =
        ratingFilter === 'All' ||
        (ratingFilter === '4+' && store.rating >= 4) ||
        (ratingFilter === '4.5+' && store.rating >= 4.5)

      return categoryMatch && ratingMatch && searchMatch
    })

    if (filtered.length > 0) {
      return filtered
    }

    return popularStores
      .filter((store) => categoryFilter === 'All' || store.category === categoryFilter)
      .filter((store) => ratingFilter === 'All' || (ratingFilter === '4+' ? store.rating >= 4 : store.rating >= 4.5))
      .slice(0, 12)
  }, [allStores, categoryFilter, locationFilter, ratingFilter, searchFilter])

  if (!isDataReady) {
    return <div className="min-h-screen bg-[#f8f9fb] px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading stores...</div>
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Top Stores Near You</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Showing results near {locationFilter === 'All' ? 'your city' : locationFilter} with fallback to popular stores.</p>
        </div>
      </div>

      <div className="mb-6">
        <input
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          placeholder="Search store name..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
        />
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gray-200 bg-white p-4 dark:border-yellow-500/20 dark:bg-zinc-900 sm:grid-cols-3 sm:p-5">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Location</label>
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          >
            {['All', ...storeLocations].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Category</label>
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
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

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  )
}
