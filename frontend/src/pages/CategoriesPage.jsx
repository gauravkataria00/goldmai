import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'

export default function CategoriesPage() {
  if (!Array.isArray(categories)) {
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">All Categories</h2>
        <p className="mt-2 text-zinc-400">Start your journey: Category → Stores → Products.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
