import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  if (!product) {
    return <div className="rounded-xl border border-gold-500/20 bg-zinc-950/70 p-4 text-zinc-300">Loading...</div>
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-gold-500/20 bg-zinc-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-2 top-2 rounded-md bg-gold-500 px-2 py-1 text-[10px] font-bold text-black">
          {product.discountPercent}% OFF
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h4 className="line-clamp-1 font-medium text-zinc-100">{product.name}</h4>
        <p className="text-sm text-zinc-400">{product.category}</p>
        {product.storeName && <p className="text-xs text-zinc-500">{product.storeName}</p>}
        <p className="text-xs text-zinc-400">
          ⭐ {product.rating} ({product.reviewsCount})
        </p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gold-300">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-xs text-zinc-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </Link>
  )
}
