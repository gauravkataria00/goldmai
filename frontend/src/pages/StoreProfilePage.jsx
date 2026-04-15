import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { stores } from '../data/stores'

export default function StoreProfilePage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(stores) && Array.isArray(products)
  const store = (stores || []).find((entry) => entry.id === id)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(store?.galleryImages?.[0] || store?.coverImage || '')
  const [isPaymentSuccessVisible, setIsPaymentSuccessVisible] = useState(false)

  if (!isDataReady) {
    return <div className="min-h-screen bg-[#f8f9fb] px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading...</div>
  }

  if (!id) {
    return <Navigate to="/categories" replace />
  }

  if (!store) {
    return <Navigate to="/categories" replace />
  }

  const storeProducts = (products || []).filter((product) => product.storeId === store.id)
  const phone = store.whatsappNumber?.replace(/^91/, '') || ''
  const whatsappText = encodeURIComponent(`Hi, I want details about ${store.name}`)
  const yearsInBusiness = store.yearsInBusiness || 4
  const totalReviews = store.totalReviews || 37
  const openingHours = store.openingHours || '10:00 AM - 9:00 PM'
  const offeredCategories = store.categories || [store.category]
  const storeTags = Array.isArray(store.tags) && store.tags.length > 0 ? store.tags : ['Top Rated', 'Trusted Seller', 'Verified']
  const cashbackAmount = String(store.cashbackOffer || '').match(/\d+/)?.[0] || '100'
  const cashbackLeft = store.cashbackLeft || 10
  const peopleSavedToday = store.peopleSavedToday || 20
  const productHeading =
    store.category === 'Food'
      ? 'Popular Dishes'
      : store.category === 'Fashion'
        ? 'Trending Items'
        : store.category === 'Electronics'
          ? 'Top Gadgets'
          : 'Popular Services'
  const productSubtext =
    store.category === 'Food'
      ? 'Only food items from this cafe are shown here.'
      : store.category === 'Fashion'
        ? 'Only fashion items from this store are shown here.'
        : store.category === 'Electronics'
          ? 'Only electronics from this store are shown here.'
          : 'Only service-related items from this store are shown here.'

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-yellow-500/20 dark:bg-zinc-900">
        <div className="relative h-64 sm:h-72">
          <img src={store.coverImage || store.image} alt={store.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-200 dark:text-gray-300">Store Profile</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">{store.name}</h1>
            <p className="mt-1 text-sm text-gray-100 dark:text-gray-200">⭐ {store.rating} • {store.category} • {totalReviews} reviews</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {storeTags.map((badge) => (
              <span key={badge} className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-300">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-black dark:text-white">
            <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-300">
              {store.category}
            </span>
            <span>{store.area}, {store.location}</span>
            <span>{yearsInBusiness}+ years in business</span>
          </div>

          <div className="mt-5 grid gap-3 rounded-xl border border-gray-200 bg-white/80 p-4 text-sm text-black dark:border-yellow-500/20 dark:bg-black/35 dark:text-white sm:grid-cols-2">
            <p><span className="text-gray-600 dark:text-gray-400">Owner:</span> {store.ownerName || 'Store Owner'}</p>
            <p><span className="text-gray-600 dark:text-gray-400">Opening Hours:</span> {openingHours}</p>
            <p className="sm:col-span-2"><span className="text-gray-600 dark:text-gray-400">Full Address:</span> {store.fullAddress || `${store.area}, ${store.location}`}</p>
            <div className="sm:col-span-2 flex flex-wrap gap-2">
              {(offeredCategories || []).map((item) => (
                <span key={item} className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-gold-500/30 bg-gold-500/10 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Cashback Offer</p>
            <p className="mt-1 text-sm font-semibold text-black dark:text-white">Flat ₹{cashbackAmount} cashback on ₹500 bill</p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">Only {cashbackLeft} cashback left today</p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{peopleSavedToday}+ people saved today</p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white/80 p-3 text-sm text-black dark:border-yellow-500/20 dark:bg-black/35 dark:text-white">"Great quality!" - Ravi</div>
            <div className="rounded-xl border border-gray-200 bg-white/80 p-3 text-sm text-black dark:border-yellow-500/20 dark:bg-black/35 dark:text-white">"Fast service" - Aman</div>
            <div className="rounded-xl border border-gray-200 bg-white/80 p-3 text-sm text-black dark:border-yellow-500/20 dark:bg-black/35 dark:text-white">"Highly recommended" - Neha</div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to={`/category/${store.category.toLowerCase()}`}
              className="rounded-lg border border-gold-500/35 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
            >
              Back to Category
            </Link>
            <button
              type="button"
              onClick={() => setIsPaymentSuccessVisible(true)}
              className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
            >
              Pay Bill & Save ₹100
            </button>
            <a
              href={`https://wa.me/91${phone}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-black dark:text-white sm:text-3xl">{productHeading}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{productSubtext}</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 dark:border-yellow-500/20 dark:bg-zinc-900/70">
          <img src={selectedGalleryImage || store.coverImage || store.image} alt={store.name} className="h-72 w-full rounded-xl object-cover" />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {(store.galleryImages || store.gallery || []).slice(0, 4)?.map((galleryImage) => (
              <button
                key={galleryImage}
                type="button"
                onClick={() => setSelectedGalleryImage(galleryImage)}
                className={`overflow-hidden rounded-lg border ${selectedGalleryImage === galleryImage ? 'border-gold-400' : 'border-gold-500/20'}`}
              >
                <img src={galleryImage} alt="store gallery" className="h-16 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {storeProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {storeProducts.length === 0 && (
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 text-center text-black shadow-sm dark:border-yellow-500/20 dark:bg-zinc-900 dark:text-white dark:shadow-none">
            No relevant products available for this category yet.
          </div>
        )}
      </div>

      {isPaymentSuccessVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_0_30px_rgba(234,179,8,0.2)] dark:border-yellow-500/30 dark:bg-zinc-900">
            <p className="text-xl font-bold text-black dark:text-white">Payment Successful</p>
            <p className="mt-2 text-base font-semibold text-gold-300">₹100 Cashback Credited</p>
            <button
              type="button"
              onClick={() => setIsPaymentSuccessVisible(false)}
              className="mt-5 rounded-lg border border-gold-500/40 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
