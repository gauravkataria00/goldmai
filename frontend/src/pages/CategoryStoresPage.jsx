import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import StoreCard from '../components/StoreCard'
import { categories } from '../data/categories'
import { storeLocations, stores } from '../data/stores'

export default function CategoryStoresPage() {
  const { name } = useParams()
  const isDataReady = Array.isArray(categories) && Array.isArray(stores) && Array.isArray(storeLocations)
  const categoryName = categories?.find((entry) => entry.name.toLowerCase() === String(name).toLowerCase())?.name

  const [locationFilter, setLocationFilter] = useState('All')
  const [ratingFilter, setRatingFilter] = useState('All')

  const visibleStores = useMemo(() => {
    return (stores || []).filter((store) => {
      const categoryMatch = store.category === categoryName
      const locationMatch = locationFilter === 'All' || store.location === locationFilter
      const ratingMatch =
        ratingFilter === 'All' ||
        (ratingFilter === '4+' && store.rating >= 4) ||
        (ratingFilter === '4.5+' && store.rating >= 4.5)

      return categoryMatch && locationMatch && ratingMatch
    })
  }, [categoryName, locationFilter, ratingFilter])

  if (!isDataReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
  }

  if (!name) {
    return <Navigate to="/categories" replace />
  }

  if (!categoryName) {
    return <Navigate to="/categories" replace />
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Category</p>
          <h2 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">{categoryName} Stores</h2>
          <p className="mt-2 text-zinc-400">Filter by location and rating to find the best match.</p>
        </div>
        <Link to="/categories" className="text-sm text-gold-300 hover:text-gold-200">Back to Categories</Link>
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gold-500/20 bg-zinc-950/60 p-4 sm:grid-cols-2 sm:p-5">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Location</label>
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            {['All', ...storeLocations]?.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Rating</label>
          <select
            value={ratingFilter}
            onChange={(event) => setRatingFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            <option value="All">All Ratings</option>
            <option value="4+">4.0+</option>
            <option value="4.5+">4.5+</option>
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-zinc-400">{visibleStores.length} stores found</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleStores?.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {visibleStores.length === 0 && (
        <div className="mt-8 rounded-xl border border-gold-500/20 bg-zinc-950/60 p-6 text-center text-zinc-300">
          No stores matched this filter combination.
        </div>
      )}
    </section>
  )
}
