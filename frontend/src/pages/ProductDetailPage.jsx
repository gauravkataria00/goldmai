import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { stores } from '../data/stores'

export default function ProductDetailPage() {
  const { id } = useParams()
  const isDataReady = Array.isArray(products) && Array.isArray(stores)

  if (!isDataReady) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
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

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/80 p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img src={product.image} alt={product.name} className="h-80 w-full rounded-xl object-cover sm:h-[420px]" />
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.12em] text-zinc-400">Product Detail</p>
            <h1 className="font-serif text-4xl font-bold text-zinc-50">{product.name}</h1>
            <p className="text-zinc-300">Category: {product.category}</p>
            <p className="text-zinc-300">From Store: <Link to={`/store/${store.id}`} className="text-gold-300 hover:text-gold-200">{store.name}</Link></p>
            <p className="text-zinc-300">Location: {store.area}, {store.location}</p>

            <div className="flex items-end gap-3">
              <p className="text-3xl font-semibold text-gold-300">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-sm text-zinc-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
              <span className="rounded-md bg-gold-500 px-2 py-1 text-xs font-bold text-black">{product.discountPercent}% OFF</span>
            </div>

            <p className="leading-relaxed text-zinc-300">{product.description}</p>

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
                className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-300 px-4 py-2 text-sm font-semibold text-black"
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
