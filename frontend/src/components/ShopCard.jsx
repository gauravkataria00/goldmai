import { Link } from 'react-router-dom'

export default function ShopCard({ shop }) {
  const primaryCategory = shop.categories?.[0] || 'Premium'

  return (
    <Link
      to={`/shop/${shop.id}`}
      className="group block overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/70 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full border border-gold-500/40 bg-black/60 px-3 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur-sm">
          {primaryCategory}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-xl font-bold text-zinc-100">{shop.name}</h3>
        <p className="text-sm text-zinc-400">
          {shop.area}, {shop.location}
        </p>
        <p className="text-sm font-medium text-gold-300">
          ⭐ {shop.rating} <span className="text-zinc-400">({shop.totalReviews} reviews)</span>
        </p>
        <div className="inline-flex rounded-lg border border-gold-500/35 px-3 py-1.5 text-xs font-semibold text-gold-300 transition-colors duration-300 group-hover:bg-gold-500/10">
          View Shop
        </div>
      </div>
    </Link>
  )
}
