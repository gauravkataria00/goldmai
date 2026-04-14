import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'

export default function CategoriesPage() {
  if (!Array.isArray(categories)) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading...</div>
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">All Categories</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Choose your category, visit nearby stores, and unlock instant cashback on every bill.</p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
