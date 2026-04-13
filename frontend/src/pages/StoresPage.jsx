import { useEffect, useMemo, useState } from 'react'
import { shops } from '../data/shops'
import ShopCard from '../components/ShopCard'
import { locations } from '../data/shops'
import StoreCard from '../components/StoreCard'

export default function StoresPage({ selectedLocation, demoStores = [] }) {
  const [locationFilter, setLocationFilter] = useState(selectedLocation || 'Karnal')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [ratingFilter, setRatingFilter] = useState('All')
  const isDataReady = Array.isArray(shops) && Array.isArray(locations)
  const areDemoStoresReady = Array.isArray(demoStores)

  useEffect(() => {
    if (selectedLocation) {
      setLocationFilter(selectedLocation)
    }
  }, [selectedLocation])

  const categoryOptions = useMemo(() => {
    const uniqueCategories = new Set((shops || []).flatMap((shop) => shop.categories || []))
    return ['All', ...Array.from(uniqueCategories)]
  }, [])

  const visibleShops = useMemo(() => {
    return (shops || []).filter((shop) => {
      const locationMatch = locationFilter === 'All' || shop.location === locationFilter
      const categoryMatch = categoryFilter === 'All' || shop.categories.includes(categoryFilter)
      const ratingMatch =
        ratingFilter === 'All' ||
        (ratingFilter === '4+' && shop.rating >= 4) ||
        (ratingFilter === '4.5+' && shop.rating >= 4.5)

      return locationMatch && categoryMatch && ratingMatch
    })
  }, [locationFilter, categoryFilter, ratingFilter])

  if (!isDataReady || !areDemoStoresReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Nearby Premium Stores</h2>
          <p className="mt-2 text-zinc-400">Detailed local marketplace for curated fashion shops.</p>
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gold-500/20 bg-zinc-950/60 p-4 sm:grid-cols-3 sm:p-5">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Location</label>
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            {['All', ...locations]?.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Category</label>
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            {categoryOptions?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
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

      <p className="mb-5 text-sm text-zinc-400">{visibleShops.length} stores found</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleShops?.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      {visibleShops.length === 0 && (
        <div className="mt-8 rounded-xl border border-gold-500/20 bg-zinc-950/60 p-6 text-center text-zinc-300">
          No stores matched this filter combination.
        </div>
      )}

      {demoStores.length > 0 && (
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <h3 className="font-serif text-2xl font-bold text-zinc-50 sm:text-3xl">Your Demo Stores</h3>
              <p className="mt-2 text-zinc-400">Stores added from the Add Store form in this session.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demoStores?.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
