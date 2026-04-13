import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  if (!category) {
    return <div className="rounded-2xl border border-gold-500/25 bg-zinc-950/80 p-6 text-zinc-300">Loading...</div>
  }

  const categoryMeta = {
    Fashion: { icon: '✦', label: 'Style, apparel, footwear' },
    Food: { icon: '◌', label: 'Dining, menus, delivery' },
    Electronics: { icon: '⌁', label: 'Gadgets, audio, smart tech' },
    Services: { icon: '✚', label: 'Repairs, care, home help' },
  }

  const meta = categoryMeta[category.name] || { icon: '◆', label: 'Marketplace category' }

  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className="group block rounded-2xl border border-gold-500/25 bg-zinc-950/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-[0_0_28px_rgba(234,179,8,0.18)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Category</p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-zinc-50 transition-colors duration-300 group-hover:text-gold-300">
            {category.name}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 text-2xl text-gold-300">
          {meta.icon}
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-400">{meta.label}</p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-gold-300">
        View Stores
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
