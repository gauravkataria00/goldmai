import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { storeLocations, stores } from '../data/stores'

export default function ExplorePage({ selectedLocation }) {
  const [locationFilter, setLocationFilter] = useState(selectedLocation || 'All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [searchFilter, setSearchFilter] = useState('')

  const isDataReady = Array.isArray(products) && Array.isArray(stores) && Array.isArray(storeLocations)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  )

  const storeById = useMemo(() => {
    const map = new Map()
    stores.forEach((store) => map.set(store.id, store))
    return map
  }, [])

  useEffect(() => {
    if (selectedLocation) {
      setLocationFilter(selectedLocation)
    }
  }, [selectedLocation])

  const visibleProducts = useMemo(() => {
    const searchValue = searchFilter.trim().toLowerCase()

    const localProducts = products.filter((product) => {
      const productStore = storeById.get(product.storeId)
      return locationFilter === 'All' || productStore?.location === locationFilter
    })

    const baseProducts =
      localProducts.length > 0
        ? localProducts
        : [...products]
            .sort((firstProduct, secondProduct) => secondProduct.rating - firstProduct.rating)
            .slice(0, 40)

    const filtered = baseProducts.filter((product) => {
      const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter
      const searchMatch = !searchValue || product.name.toLowerCase().includes(searchValue)
      const priceMatch =
        priceFilter === 'All' ||
        (priceFilter === 'under3000' && product.price < 3000) ||
        (priceFilter === '3000to6000' && product.price >= 3000 && product.price <= 6000) ||
        (priceFilter === 'above6000' && product.price > 6000)

      return categoryMatch && priceMatch && searchMatch
    })

    if (filtered.length > 0) {
      return filtered
    }

    return baseProducts
      .filter((product) => categoryFilter === 'All' || product.category === categoryFilter)
      .slice(0, 16)
  }, [categoryFilter, locationFilter, priceFilter, searchFilter, storeById])

  if (!isDataReady) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading products...</div>
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Trending Products</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Real marketplace-style product discovery across multiple categories.</p>
      </div>

      <div className="mb-6">
        <input
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          placeholder="Search product name..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
        />
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900 sm:grid-cols-3 sm:p-5">
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
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Price</label>
          <select
            value={priceFilter}
            onChange={(event) => setPriceFilter(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          >
            <option value="All">All Prices</option>
            <option value="under3000">Under ₹3,000</option>
            <option value="3000to6000">₹3,000 - ₹6,000</option>
            <option value="above6000">Above ₹6,000</option>
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">{visibleProducts.length} products found</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              storeName: storeById.get(product.storeId)?.name,
            }}
          />
        ))}
      </div>
    </section>
  )
}
