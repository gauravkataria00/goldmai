import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import StoreCard from '../components/StoreCard'
import ProductCard from '../components/ProductCard'
import CategoriesPage from './CategoriesPage'
import CategoryStoresPage from './CategoryStoresPage'
import StoreProfilePage from './StoreProfilePage'
import ProductDetailPage from './ProductDetailPage'
import StoresPage from './StoresPage'
import ShopProfilePage from './ShopProfilePage'
import ExplorePage from './ExplorePage'
import SellPage from './SellPage'
import WebsiteDetail from './WebsiteDetail'
import AddStorePage from './AddStorePage'
import { categories } from '../data/categories'
import { storeLocations, stores } from '../data/stores'
import { products } from '../data/products'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState('Karnal')
  const [demoStores, setDemoStores] = useState([])

  const isDataReady = Array.isArray(categories) && Array.isArray(stores) && Array.isArray(products)

  const nearbyStores = useMemo(
    () => (stores || []).filter((store) => store.location === selectedLocation).slice(0, 6),
    [selectedLocation],
  )

  const trendingProducts = useMemo(() => (products || []).slice(0, 8), [])

  const storeMap = useMemo(() => {
    const map = new Map()
    ;(stores || []).forEach((store) => map.set(store.id, store))
    return map
  }, [])

  if (!isDataReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
  }

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Categories', to: '/categories' },
    { label: 'Stores', to: '/stores' },
    { label: 'Add Store', to: '/add-store' },
    { label: 'Sell', to: '/sell' },
  ]

  const handleAddDemoStore = (storePayload) => {
    if (!storePayload) {
      return
    }

    const nextStore = {
      ...storePayload,
      id: `demo-${Date.now()}`,
      image:
        storePayload.image ||
        'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1200&q=80',
      rating: 4.5,
      categories: [storePayload.category || 'General'],
      totalReviews: 0,
    }

    setDemoStores((prevStores) => [nextStore, ...prevStores])
  }

  const HomeLanding = () => (
    <>
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
            alt="GOLDMAI marketplace background"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/92 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.1),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="inline-flex rounded-full border border-gold-500/20 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold-300">
              Trusted local marketplace
            </motion.p>

            <motion.h2 variants={fadeUp} className="mt-5 font-serif text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              GOLDMAI — Discover Everything Around You
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Find trusted local stores around you across fashion, food, electronics, and more.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="w-full sm:max-w-xs">
                <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-zinc-400">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(event) => setSelectedLocation(event.target.value)}
                  className="w-full rounded-2xl border border-gold-500/25 bg-zinc-950/90 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors duration-300 focus:border-gold-400"
                  aria-label="Select location"
                >
                  {storeLocations?.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                to="/categories"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(234,179,8,0.56)]"
              >
                Explore Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" className="grid gap-4 rounded-3xl border border-gold-500/20 bg-zinc-950/75 p-5 shadow-[0_0_40px_rgba(234,179,8,0.12)] backdrop-blur-md sm:p-6">
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {[
                { label: 'Categories', value: '04' },
                { label: 'Stores', value: '12' },
                { label: 'Products', value: '48' },
                { label: 'Locations', value: '03' },
              ]?.map((item) => (
                <div key={item.label} className="rounded-2xl border border-gold-500/15 bg-black/60 px-4 py-5 text-center">
                  <div className="text-2xl font-bold text-gold-300">{item.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-zinc-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Categories</h3>
            <p className="mt-2 text-zinc-400">Browse the marketplace by category.</p>
          </div>
          <Link to="/categories" className="inline-flex rounded-xl border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-500/10">
            View All
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories?.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Nearby Stores</h3>
            <p className="mt-2 text-zinc-400">Stores in {selectedLocation}.</p>
          </div>
          <Link to="/stores" className="inline-flex rounded-xl border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-500/10">
            Browse Stores
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyStores?.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Trending Products</h3>
          <p className="mt-2 text-zinc-400">Mixed products from all categories.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts?.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                storeName: storeMap.get(product.storeId)?.name,
              }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-r from-zinc-950 to-black p-8 sm:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.18em] text-gold-300">Seller Section</p>
          <h3 className="mt-3 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Start Selling on GOLDMAI</h3>
          <p className="mt-4 max-w-2xl text-zinc-400">
            List your store and connect products to a premium local audience.
          </p>
          <Link
            to="/sell"
            className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(234,179,8,0.56)]"
          >
            Start Selling
          </Link>
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-zinc-100" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}>
      <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 border-b border-gold-500/20 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 md:flex-nowrap md:justify-between">
            <div className="min-w-[170px]">
              <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-400 sm:text-3xl">GOLDMAI</h1>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">Local Digital Marketplace</p>
            </div>

            <div className="order-3 flex w-full justify-center gap-5 text-sm font-medium text-zinc-300 md:order-2 md:w-auto md:gap-8">
              {navItems?.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `transition-colors duration-300 hover:text-gold-400 ${isActive ? 'text-gold-300' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="order-2 ml-auto flex items-center gap-3 md:order-3 md:ml-0">
              <select
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
                className="rounded-full border border-gold-500/25 bg-zinc-950/90 px-3 py-2 text-xs text-zinc-200 outline-none transition-colors duration-300 focus:border-gold-400"
                aria-label="Select location"
              >
                {storeLocations?.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.nav>

      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:name" element={<CategoryStoresPage />} />
        <Route path="/store/:id" element={<StoreProfilePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/site/:id" element={<WebsiteDetail />} />
        <Route path="/explore" element={<ExplorePage selectedLocation={selectedLocation} />} />
        <Route path="/stores" element={<StoresPage selectedLocation={selectedLocation} demoStores={demoStores} />} />
        <Route path="/add-store" element={<AddStorePage onAddStore={handleAddDemoStore} />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/shop/:id" element={<ShopProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}