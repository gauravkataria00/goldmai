import { Link } from 'react-router-dom'

export default function ShopCard({ shop }) {
  const primaryCategory = shop.categories?.[0] || 'Premium'
  const distance = shop.distance || '0.9 km away'
  const cashbackAmount = shop.cashbackAmount || 100

  return (
    <Link
      to={`/shop/${shop.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 dark:border-yellow-500/20 dark:bg-zinc-900 dark:shadow-none dark:hover:shadow-none"
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-gold-500/40 bg-black/60 px-3 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur-sm">
          {primaryCategory}
        </span>
      </div>
      <div className="space-y-3.5 p-5">
        <h3 className="font-serif text-xl font-bold text-black dark:text-white">{shop.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {shop.area}, {shop.location}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{distance}</p>
        <p className="text-sm font-medium text-gold-300">
          ⭐ {shop.rating} <span className="text-gray-600 dark:text-gray-400">({shop.totalReviews} reviews)</span>
        </p>
        <p className="text-xs font-semibold text-gold-300">Pay ₹500 → Get ₹{cashbackAmount}</p>
        <span className="inline-flex w-fit rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold text-gold-300">
          Popular in your area
        </span>
        <p className="text-xs text-gray-600 dark:text-gray-400">Only 8 cashback left</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">20+ people saved today</p>
        <div className="inline-flex rounded-lg bg-yellow-500 px-3 py-1.5 text-xs font-semibold text-black transition-colors duration-300 group-hover:bg-yellow-400">
          Get Cashback
        </div>
      </div>
    </Link>
  )
}
