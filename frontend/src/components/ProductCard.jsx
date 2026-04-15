import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  if (!product) {
    return <div className="rounded-xl border border-gray-200 bg-white p-4 text-black shadow-sm dark:border-yellow-500/20 dark:bg-zinc-900 dark:text-white dark:shadow-none">Loading...</div>
  }

  const normalizedDiscount = Math.max(10, Math.min(20, Number(product.discountPercent) || 10))

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 dark:border-yellow-500/20 dark:bg-zinc-900 dark:shadow-none dark:hover:shadow-none"
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <span className="absolute right-2 top-2 rounded-md bg-gold-500 px-2 py-1 text-[10px] font-bold text-black">
          {normalizedDiscount}% OFF
        </span>
      </div>
      <div className="space-y-2.5 p-4">
        <h4 className="line-clamp-1 font-medium text-black dark:text-white">{product.name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{product.category}</p>
        {product.storeName && <p className="text-xs text-gray-600 dark:text-gray-400">{product.storeName}</p>}
        <p className="text-xs text-gray-600 dark:text-gray-400">
          ⭐ {product.rating} ({product.reviewsCount})
        </p>
        <div className="flex items-center gap-2">
          <p className="text-base font-bold text-gold-300">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-xs text-gray-600/80 line-through dark:text-gray-400/80">₹{product.originalPrice.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </Link>
  )
}
