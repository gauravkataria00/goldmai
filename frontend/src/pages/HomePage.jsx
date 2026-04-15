import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
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
import { getStoresWithFallback, storeLocations, stores } from '../data/stores'
import { products } from '../data/products'
import {
  getCustomerReviewsMock,
  getFeaturedStores,
  getRecentlyViewedMock,
  getTopRatedStores,
} from '../data/showroomEngine'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [demoStores, setDemoStores] = useState([])
  const [storeSearch, setStoreSearch] = useState('')
  const [productSearch, setProductSearch] = useState('')
  const [theme, setTheme] = useState('dark')

  const isDataReady = Array.isArray(categories) && Array.isArray(stores) && Array.isArray(products)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Categories', to: '/categories' },
    { label: 'Stores', to: '/stores' },
    { label: 'Add Store', to: '/add-store' },
    { label: 'Sell', to: '/sell' },
  ]

  const allStores = useMemo(() => [...demoStores, ...stores], [demoStores])

  const locationStores = useMemo(
    () => getStoresWithFallback(selectedLocation, allStores),
    [allStores, selectedLocation],
  )

  const featuredStores = useMemo(() => {
    const list = getFeaturedStores(allStores)
    return list.length > 0 ? list.slice(0, 6) : getTopRatedStores(allStores).slice(0, 6)
  }, [allStores])

  const topRatedStores = useMemo(() => getTopRatedStores(allStores).slice(0, 6), [allStores])

  const nearbyStores = useMemo(() => {
    const searchValue = storeSearch.trim().toLowerCase()
    if (!searchValue) {
      return locationStores.slice(0, 6)
    }

    const matched = locationStores.filter((store) => store.name.toLowerCase().includes(searchValue))
    return matched.length > 0 ? matched.slice(0, 6) : locationStores.slice(0, 6)
  }, [locationStores, storeSearch])

  const trendingProducts = useMemo(() => {
    const searchValue = productSearch.trim().toLowerCase()
    const byPerformance = [...products].sort((a, b) => {
      const firstScore = a.rating * 10 + a.discountPercent
      const secondScore = b.rating * 10 + b.discountPercent
      return secondScore - firstScore
    })

    const groupedByCategory = ['Fashion', 'Food', 'Electronics', 'Services'].flatMap((category) =>
      byPerformance.filter((product) => product.category === category).slice(0, 4),
    )

    const baseList = groupedByCategory.length > 0 ? groupedByCategory : byPerformance.slice(0, 16)

    if (!searchValue) {
      return baseList.slice(0, 12)
    }

    const matched = baseList.filter((product) => product.name.toLowerCase().includes(searchValue))
    return matched.length > 0 ? matched.slice(0, 12) : baseList.slice(0, 12)
  }, [productSearch])

  const recentlyViewedProducts = useMemo(() => getRecentlyViewedMock(products).slice(0, 8), [])
  const customerReviews = useMemo(() => getCustomerReviewsMock(allStores), [allStores])

  const storeMap = useMemo(() => {
    const map = new Map()
    allStores.forEach((store) => map.set(store.id, store))
    return map
  }, [allStores])

  const handleAddDemoStore = (storePayload) => {
    if (!storePayload) {
      return
    }

    const nextStore = {
      ...storePayload,
      id: `demo-${Date.now()}`,
      coverImage: storePayload.coverImage || storePayload.image || 'https://loremflickr.com/900/700/fashion,store?lock=9991',
      galleryImages: storePayload.galleryImages || [storePayload.coverImage || storePayload.image || 'https://loremflickr.com/900/700/fashion,store?lock=9991'],
      rating: 4.5,
      cashback: 90,
      cashbackOffer: 'Get ₹90 cashback',
      cashbackLeft: 7,
      peopleSavedToday: 26,
      tags: ['Top Rated', 'Trusted Seller', 'Verified'],
      distance: storePayload.distance || '1.2 km away',
      totalReviews: 36,
      categories: [storePayload.category || 'General'],
    }

    setDemoStores((previousStores) => [nextStore, ...previousStores])
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  if (!isDataReady) {
    return <div className="min-h-screen bg-[#f8f9fb] px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading showroom...</div>
  }

  const HomeLanding = () => (
    <>
      <section className="relative isolate overflow-hidden bg-[#f8f9fb] dark:bg-black">
        <div className="absolute inset-0">
          <img
            src="https://loremflickr.com/1600/900/fashion,market?lock=20001"
            alt="GOLDMAI digital showroom"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          {theme === 'dark' ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/92 to-black" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.1),transparent_30%)]" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.05),transparent_30%)]" />
            </>
          )}
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="inline-flex rounded-full border border-gold-500/20 bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold-300 shadow-sm dark:border-gold-500/30 dark:bg-black/50 dark:shadow-none">
              Startup-ready digital showroom
            </motion.p>

            <motion.h2 variants={fadeUp} className="mt-5 font-serif text-4xl font-bold leading-tight tracking-[0.015em] text-black dark:text-white md:text-6xl">
              Discover real stores. Explore like a <span className="text-gold-300">showroom.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
              Walk through nearby stores, explore real products, and experience your city digitally.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="w-full sm:max-w-xs">
                <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-gray-600 dark:text-gray-400">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(event) => setSelectedLocation(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:border-yellow-500/20 dark:bg-zinc-950/90 dark:text-white"
                  aria-label="Select location"
                >
                  <option value="All">All</option>
                  {storeLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                to="/stores"
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
              >
                Explore Showroom
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-lg backdrop-blur-md dark:border-yellow-500/20 dark:bg-zinc-900 sm:p-6">
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {[
                { label: 'Locations', value: String(storeLocations.length).padStart(2, '0') },
                { label: 'Stores', value: String(allStores.length) },
                { label: 'Products', value: String(products.length) },
                { label: 'Categories', value: String(categories.length).padStart(2, '0') },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white px-4 py-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300 dark:border-yellow-500/20 dark:bg-black/60">
                  <div className="text-2xl font-bold text-gold-300">{item.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Trending Stores & Products Near You</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Discover what people near you are saving on.</p>
          </div>
        </div>

        <div className="mb-5">
          <input
            value={productSearch}
            onChange={(event) => setProductSearch(event.target.value)}
            placeholder="Search trending product..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
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
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Pay Nearby. Save Instantly.</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Real stores. Real savings. No coupons needed.</p>
          </div>
          <Link to="/stores" className="inline-flex rounded-xl border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-500/10">
            Find Cashback Stores
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStores.map((store) => (
            <StoreCard key={`featured-${store.id}`} store={store} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Top Cashback Stores Near You</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Earn cashback every time you pay locally.</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {topRatedStores.map((store) => (
            <StoreCard key={`top-${store.id}`} store={store} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl scroll-smooth px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Top Cashback Stores Near You</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Based on {selectedLocation}. No match? We show popular cashback stores.</p>
          </div>
        </div>

        <div className="mb-5">
          <input
            value={storeSearch}
            onChange={(event) => setStoreSearch(event.target.value)}
            placeholder="Search nearby store..."
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
          />
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyStores.map((store) => (
            <StoreCard key={`nearby-${store.id}`} store={store} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Recently Viewed</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Pick up where you left off and keep unlocking cashback.</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {recentlyViewedProducts.map((product) => (
            <div key={`recent-${product.id}`} className="min-w-[280px] snap-start">
              <ProductCard
                product={{
                  ...product,
                  storeName: storeMap.get(product.storeId)?.name,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">People Saving With GOLDMAI</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Real buyers, real local payments, real instant cashback.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customerReviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-yellow-500/20 dark:bg-zinc-900 dark:shadow-none">
              <p className="text-sm text-black dark:text-white">"{review.message}"</p>
              <p className="mt-3 text-xs font-semibold text-gold-300">⭐ {review.rating}</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{review.name} • {review.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Where Do You Want to Save Today?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Choose a category and unlock instant cashback nearby.</p>
          </div>
          <Link to="/categories" className="inline-flex rounded-xl border border-gold-500/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-500/10">
            Unlock Cashback
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  )

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-black dark:bg-black dark:text-white">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-yellow-500/20"
      >
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="sm:hidden">
            <div className="flex items-center justify-between px-4 py-2">
              <h1 className="font-serif text-lg font-bold tracking-wide text-yellow-500">GOLDMAI</h1>

              <div className="flex items-center gap-2">
                <select
                  value={selectedLocation}
                  onChange={(event) => setSelectedLocation(event.target.value)}
                  className="rounded border border-yellow-500/30 bg-transparent px-2 py-1 text-xs text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:text-white"
                  aria-label="Select location"
                >
                  <option value="All">All</option>
                  {storeLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                  className="text-lg text-black dark:text-white"
                  aria-label="Toggle theme"
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto px-4 pb-2 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `whitespace-nowrap transition-colors duration-300 hover:text-gold-400 ${isActive ? 'text-gold-300' : 'text-black dark:text-white'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden items-center justify-between px-4 py-4 sm:flex">
            <div className="min-w-[170px]">
              <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-400 transition-all duration-300 sm:text-3xl">
                GOLDMAI
              </h1>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-600 dark:text-gray-400 sm:text-xs">Local Digital Marketplace</p>
            </div>

            <div className="flex justify-center gap-8 text-sm font-medium text-black dark:text-white">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `transition-colors duration-300 hover:text-gold-400 ${isActive ? 'text-gold-300' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
                className="rounded-full border border-gold-500/25 bg-white/90 px-3 py-2 text-xs text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:bg-zinc-950/90 dark:text-white"
                aria-label="Select location"
              >
                <option value="All">All</option>
                {storeLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                className="rounded-full border border-gold-500/30 bg-white/80 px-3 py-2 text-sm text-black transition-colors duration-300 hover:bg-gold-500/10 dark:bg-zinc-950/80 dark:text-white"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="pt-24 sm:pt-20">
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:name" element={<CategoryStoresPage selectedLocation={selectedLocation} />} />
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

        <footer className="border-t border-gold-500/20 bg-white/90 dark:bg-black/85">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div>
              <h4 className="font-serif text-xl font-bold text-black dark:text-white">About GOLDMAI</h4>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                GOLDMAI is a premium digital showroom connecting users with trusted local stores and high-conversion cashback offers.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-black dark:text-white">Contact</h4>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Email: hello@goldmai.in</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +91 80591 72716</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-black dark:text-white">Locations Served</h4>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{storeLocations.join(', ')}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
