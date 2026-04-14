import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { shops } from '../data/shops'

export default function ProductPage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(products) && Array.isArray(shops)

  if (!isDataReady) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading...</div>
  }

  if (!id) {
    return <Navigate to="/stores" replace />
  }

  const product = (products || []).find((entry) => entry.id === id)

  if (!product) {
    return <Navigate to="/stores" replace />
  }

  const shop = (shops || []).find((entry) => entry.id === product.shopId)

  if (!shop) {
    return <Navigate to="/stores" replace />
  }

  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image)
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M')
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '')
  const whatsappText = encodeURIComponent(`I'm interested in your product: ${product.name}`)

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-6 dark:border-yellow-500/20 dark:bg-zinc-900 sm:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img src={selectedImage} alt={product.name} className="h-80 w-full rounded-xl object-cover sm:h-[420px]" />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {(product.images || []).slice(0, 4)?.map((galleryImage) => (
                <button
                  key={galleryImage}
                  type="button"
                  onClick={() => setSelectedImage(galleryImage)}
                  className={`overflow-hidden rounded-lg border ${selectedImage === galleryImage ? 'border-gold-400' : 'border-gold-500/20'}`}
                >
                  <img src={galleryImage} alt="product thumbnail" className="h-16 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Product Detail</p>
            <h1 className="font-serif text-4xl font-bold text-black dark:text-white">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">Category: {product.category}</p>
            <p className="text-gray-600 dark:text-gray-400">Fabric: {product.fabric}</p>
            <p className="text-gray-600 dark:text-gray-400">
              ⭐ {product.rating} ({product.reviewsCount} reviews)
            </p>

            <div className="flex items-end gap-3">
              <p className="text-3xl font-semibold text-gold-300">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-sm text-gray-600/80 line-through dark:text-gray-400/80">₹{product.originalPrice.toLocaleString('en-IN')}</p>
              <span className="rounded-md bg-gold-500 px-2 py-1 text-xs font-bold text-black">{product.discountPercent}% OFF</span>
            </div>

            <div>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${selectedSize === size ? 'border-gold-400 bg-gold-500/20 text-gold-300' : 'border-gray-200 text-black dark:border-yellow-500/20 dark:text-white'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">Available Colors</p>
              <div className="flex flex-wrap gap-2">
                {product.colors?.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-lg border px-3 py-1.5 text-sm ${selectedColor === color ? 'border-gold-400 bg-gold-500/20 text-gold-300' : 'border-gray-200 text-black dark:border-yellow-500/20 dark:text-white'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <p className="leading-relaxed text-gray-600 dark:text-gray-400">{product.description}</p>
            <p className={`text-sm font-semibold ${product.inStock ? 'text-emerald-400' : 'text-rose-400'}`}>
              {product.inStock ? 'In Stock' : 'Currently Out of Stock'}
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              Sold by{' '}
              <Link to={`/shop/${shop.id}`} className="text-gold-300 hover:text-gold-200">
                {shop.name}
              </Link>
            </p>

            <a
              href={`https://wa.me/91${shop.whatsappNumber?.replace(/^91/, '') || ''}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
