import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { stores } from '../data/stores'

export default function ProductDetailPage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(products) && Array.isArray(stores)

  if (!isDataReady) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading products...</div>
  }

  if (!id) {
    return <Navigate to="/categories" replace />
  }

  const product = (products || []).find((entry) => entry.id === id)

  if (!product) {
    return <Navigate to="/categories" replace />
  }

  const store = (stores || []).find((entry) => entry.id === product.storeId)

  if (!store) {
    return <Navigate to="/categories" replace />
  }

  const phone = store.whatsappNumber?.replace(/^91/, '') || ''
  const whatsappText = encodeURIComponent(`Hi, I want to order: ${product.name} from ${store.name}`)
  const isLowStock = Number(product.reviewsCount || 0) % 3 === 0
  const stockText = isLowStock ? 'Only 2 left' : 'In Stock'

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-6 dark:border-yellow-500/20 dark:bg-zinc-900 sm:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img src={product.image} alt={product.name} className="h-80 w-full rounded-xl object-cover sm:h-[420px]" />
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Product Detail</p>
            <h1 className="font-serif text-4xl font-bold text-black dark:text-white">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">Category: {product.category}</p>
            <p className="text-gray-600 dark:text-gray-400">From Store: <Link to={`/store/${store.id}`} className="text-gold-300 hover:text-gold-200">{store.name}</Link></p>
            <p className="text-gray-600 dark:text-gray-400">Location: {store.area}, {store.location}</p>
            <p className="text-gray-600 dark:text-gray-400">⭐ {product.rating} ({product.reviewsCount} reviews)</p>

            <div className="flex items-end gap-3">
              <p className="text-3xl font-semibold text-gold-300">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-sm text-gray-600/80 line-through dark:text-gray-400/80">₹{product.originalPrice.toLocaleString('en-IN')}</p>
              <span className="rounded-md bg-gold-500 px-2 py-1 text-xs font-bold text-black">{product.discountPercent}% OFF</span>
            </div>

            <p className={`text-sm font-semibold ${isLowStock ? 'text-amber-300' : 'text-emerald-400'}`}>{stockText}</p>

            <p className="leading-relaxed text-gray-600 dark:text-gray-400">{product.description}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={`/store/${store.id}`}
                className="rounded-lg border border-gold-500/35 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
              >
                Back to Store
              </Link>
              <a
                href={`https://wa.me/91${phone}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
