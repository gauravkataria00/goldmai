import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { stores } from '../data/stores'

export default function StoreProfilePage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(stores) && Array.isArray(products)
  const store = (stores || []).find((entry) => entry.id === id)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(store?.gallery?.[0] || store?.image || '')

  if (!isDataReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
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

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/80">
        <div className="relative h-64 sm:h-72">
          <img src={store.image} alt={store.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-300">Store Profile</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">{store.name}</h1>
            <p className="mt-1 text-sm text-zinc-300">⭐ {store.rating} • {store.category}</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 text-zinc-300">
            <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-300">
              {store.category}
            </span>
            <span>{store.area}, {store.location}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to={`/category/${store.category.toLowerCase()}`}
              className="rounded-lg border border-gold-500/35 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
            >
              Back to Category
            </Link>
            <a
              href={`https://wa.me/91${phone}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-2 text-sm font-semibold text-black"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-zinc-50 sm:text-3xl">Products</h2>
        <p className="mt-2 text-zinc-400">All products are listed under this store only.</p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gold-500/20 bg-black/30 p-3">
          <img src={selectedGalleryImage || store.image} alt={store.name} className="h-72 w-full rounded-xl object-cover" />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {(store.gallery || []).slice(0, 4)?.map((galleryImage) => (
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
      </div>
    </section>
  )
}
