import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { shops } from '../data/shops'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ShopProfilePage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(shops) && Array.isArray(products)
  const shop = (shops || []).find((entry) => entry.id === id)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(shop?.gallery?.[0] || shop?.image || '')

  if (!isDataReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
  }

  if (!id) {
    return <Navigate to="/stores" replace />
  }

  if (!shop) {
    return <Navigate to="/stores" replace />
  }

  const shopProducts = (products || []).filter((product) => product.shopId === shop.id)
  const whatsappText = encodeURIComponent(`I'm interested in products from ${shop.name}`)

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/80">
        <div className="relative h-64 sm:h-72">
          <img src={shop.image} alt={shop.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-300">Premium Store Profile</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">{shop.name}</h1>
            <p className="mt-1 text-sm text-zinc-300">
              ⭐ {shop.rating} ({shop.totalReviews} reviews)
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-5 md:p-8">
          <div className="space-y-4 md:col-span-3">
            <p className="text-zinc-300">
              <span className="text-zinc-400">Owner:</span> {shop.ownerName}
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Location:</span> {shop.area}, {shop.location}
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Address:</span> {shop.fullAddress}
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Years in business:</span> {shop.yearsInBusiness}+
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Opening hours:</span> {shop.openingHours}
            </p>

            <p className="leading-relaxed text-zinc-300">{shop.description}</p>

            <div className="flex flex-wrap gap-2">
              {shop.categories?.map((category) => (
                <span key={category} className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-300">
                  {category}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/91${shop.whatsappNumber?.replace(/^91/, '') || ''}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl border border-gold-500/20 bg-black/40">
              <img src={selectedGalleryImage} alt={`${shop.name} gallery`} className="h-56 w-full object-cover sm:h-64" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {(shop.gallery || []).slice(0, 4)?.map((galleryImage) => (
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
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-zinc-50 sm:text-3xl">Products</h2>
          <Link to="/stores" className="text-sm text-gold-300 hover:text-gold-200">
            Back to Stores
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shopProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
