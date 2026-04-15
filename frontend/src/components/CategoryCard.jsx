import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  if (!category) {
    return <div className="rounded-2xl border border-gray-200 bg-white p-6 text-black shadow-sm dark:border-yellow-500/20 dark:bg-zinc-900 dark:text-white dark:shadow-none">Loading...</div>
  }

  const categoryMeta = {
    Fashion: { icon: '✦', label: 'Discover trending looks and save on every purchase.', title: 'Fashion' },
    Food: { icon: '◌', label: 'Pay at top food spots and earn instant cashback.', title: 'Eat & Save' },
    Electronics: { icon: '⌁', label: 'Get cashback on gadgets and smart devices nearby.', title: 'Electronics' },
    Services: { icon: '✚', label: 'Use local services with guaranteed cashback value.', title: 'Services & Save' },
  }

  const meta = categoryMeta[category.name] || { icon: '◆', label: 'Marketplace category', title: category.name }
  const subcategoryPreview = (category.subcategories || []).slice(0, 3).join(' • ')

  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 dark:border-yellow-500/20 dark:bg-zinc-900 dark:shadow-none dark:hover:shadow-none"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Category</p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-black transition-colors duration-300 group-hover:text-gold-300 dark:text-white">
            {meta.title}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/20 bg-gold-500/10 text-2xl text-gold-300">
          {meta.icon}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{meta.label}</p>
      {subcategoryPreview && <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{subcategoryPreview}</p>}
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-gold-300">
        Explore Stores
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
