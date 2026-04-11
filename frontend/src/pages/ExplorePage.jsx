import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { locations, shops } from '../data/shops'

export default function ExplorePage({ selectedLocation }) {
  const [locationFilter, setLocationFilter] = useState(selectedLocation || 'Karnal')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map((product) => product.category)))], [])

  const shopById = useMemo(() => {
    const map = new Map()
    shops.forEach((shop) => map.set(shop.id, shop))
    return map
  }, [])

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const productShop = shopById.get(product.shopId)
      const locationMatch = locationFilter === 'All' || productShop?.location === locationFilter
      const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter
      const priceMatch =
        priceFilter === 'All' ||
        (priceFilter === 'under3000' && product.price < 3000) ||
        (priceFilter === '3000to6000' && product.price >= 3000 && product.price <= 6000) ||
        (priceFilter === 'above6000' && product.price > 6000)

      return locationMatch && categoryMatch && priceMatch
    })
  }, [locationFilter, categoryFilter, priceFilter, shopById])

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Explore Premium Products</h2>
        <p className="mt-2 text-zinc-400">Discover detailed listings curated for local luxury fashion buyers.</p>
      </div>

      <div className="mb-8 grid gap-4 rounded-2xl border border-gold-500/20 bg-zinc-950/60 p-4 sm:grid-cols-3 sm:p-5">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Location</label>
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            {['All', ...locations].map((location) => (
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
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.12em] text-zinc-400">Price</label>
          <select
            value={priceFilter}
            onChange={(event) => setPriceFilter(event.target.value)}
            className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-gold-400"
          >
            <option value="All">All Prices</option>
            <option value="under3000">Under ₹3,000</option>
            <option value="3000to6000">₹3,000 - ₹6,000</option>
            <option value="above6000">Above ₹6,000</option>
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-zinc-400">{visibleProducts.length} products found</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
