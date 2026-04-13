import { Link } from 'react-router-dom'

export default function StoreCard({ store }) {
  if (!store) {
    return <div className="rounded-2xl border border-gold-500/25 bg-zinc-950/80 p-5 text-zinc-300">Loading...</div>
  }

  const phone = store.whatsappNumber?.replace(/^91/, '') || ''
  const yearsInBusiness = store.yearsInBusiness || 3
  const reviewsCount = store.totalReviews || 24

  return (
    <article className="group overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_0_28px_rgba(234,179,8,0.18)]">
      <Link to={`/store/${store.id}`} className="block">
        <div className="relative h-44 overflow-hidden">
          <img
            src={store.image}
            alt={store.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-gold-300">
            ⭐ {store.rating}
          </span>
          <span className="absolute left-3 top-3 rounded-full border border-gold-500/30 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-gold-300">
            Verified Store
          </span>
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          {['Top Rated', 'Trusted Seller']?.map((badge) => (
            <span key={badge} className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold text-gold-300">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-gold-300">{store.category}</p>
        <Link to={`/store/${store.id}`}>
          <h4 className="font-serif text-xl font-bold text-zinc-50 transition-colors duration-300 group-hover:text-gold-300">
            {store.name}
          </h4>
        </Link>
        <p className="text-sm text-zinc-400">{store.area}, {store.location}</p>
        <p className="text-xs text-zinc-500">{reviewsCount} reviews • {yearsInBusiness}+ years in business</p>
        <p className="text-xs text-zinc-300">"Great quality!" - Ravi</p>
        <div className="flex gap-2">
          <Link
            to={`/store/${store.id}`}
            className="rounded-lg border border-gold-500/35 px-3 py-2 text-xs font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
          >
            View Store
          </Link>
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-300 px-3 py-2 text-xs font-semibold text-black"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
