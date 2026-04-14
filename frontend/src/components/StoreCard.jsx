import { Link } from 'react-router-dom'

export default function StoreCard({ store }) {
  if (!store) {
    return <div className="rounded-2xl border border-gray-200 bg-gray-100 p-5 text-black dark:border-yellow-500/20 dark:bg-zinc-900 dark:text-white">Loading...</div>
  }

  const phone = store.whatsappNumber?.replace(/^91/, '') || ''
  const yearsInBusiness = store.yearsInBusiness || 3
  const reviewsCount = store.totalReviews || 24
  const cashbackAmount = String(store.cashbackOffer || '').match(/\d+/)?.[0] || '100'
  const tags = Array.isArray(store.tags) && store.tags.length > 0 ? store.tags : ['Top Rated', 'Trusted Seller', 'Verified']
  const cashbackLeft = store.cashbackLeft || 8
  const peopleSavedToday = store.peopleSavedToday || 20
  const coverImage = store.coverImage || store.image

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-[0_18px_40px_rgba(234,179,8,0.2)] dark:border-yellow-500/20 dark:bg-zinc-900">
      <Link to={`/store/${store.id}`} className="block">
        <div className="relative h-[220px] w-full overflow-hidden">
          <img
            src={coverImage}
            alt={store.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-gold-300">
            ⭐ {store.rating}
          </span>
          <span className="absolute left-3 top-3 rounded-full border border-gold-500/30 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-gold-300">
            Verified
          </span>
        </div>
      </Link>

      <div className="space-y-3.5 p-5">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((badge) => (
            <span key={badge} className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold text-gold-300">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-gold-300">{store.category}</p>
        <Link to={`/store/${store.id}`}>
          <h4 className="font-serif text-xl font-bold text-black transition-colors duration-300 group-hover:text-gold-300 dark:text-white">
            {store.name}
          </h4>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400">{store.area}, {store.location}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{store.distance || '0.8 km away'}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{reviewsCount} reviews • {yearsInBusiness}+ years in business</p>
        <p className="text-xs font-semibold text-gold-300">Pay ₹500 → Get ₹{cashbackAmount}</p>
        <span className="inline-flex w-fit rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold text-gold-300">
          Popular in your area
        </span>
        <p className="text-xs text-gray-600 dark:text-gray-400">Only {cashbackLeft} cashback left</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{peopleSavedToday}+ people saved today</p>
        <div className="flex gap-2.5 pt-1">
          <Link
            to={`/store/${store.id}`}
            className="rounded-lg bg-yellow-500 px-3 py-2 text-xs font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            Get Cashback
          </Link>
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-yellow-500 px-3 py-2 text-xs font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
