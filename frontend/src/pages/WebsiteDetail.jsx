import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { websites } from '../data/websites'

const categoryDemo = {
  Fashion: [
    { name: 'Regal Silk Kurta', price: '$129' },
    { name: 'Designer Lehenga', price: '$299' },
    { name: 'Luxury Heels', price: '$159' },
    { name: 'Classic Handbag', price: '$189' },
  ],
  Food: [
    { name: 'Truffle Pasta', info: 'Chef special - 35 min', price: '$18' },
    { name: 'Butter Chicken Bowl', info: 'Best seller - 25 min', price: '$14' },
    { name: 'Loaded Paneer Wrap', info: 'High protein - 20 min', price: '$11' },
    { name: 'Saffron Kulfi', info: 'Dessert - 10 min', price: '$6' },
  ],
  Electronics: [
    { name: 'Noise Cancelling Headset', price: '$249' },
    { name: 'Smartwatch Pro', price: '$199' },
    { name: 'Wireless Charging Dock', price: '$79' },
    { name: '4K Action Camera', price: '$329' },
  ],
  Services: [
    { name: 'Home Deep Cleaning', detail: '2 professionals · 3 hours' },
    { name: 'AC Installation', detail: 'Certified technician visit' },
    { name: 'Salon At Home', detail: 'Makeup and grooming package' },
    { name: 'Laptop Repair', detail: 'Pickup and delivery included' },
  ],
}

function FashionGrid({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items?.map((item) => (
        <div key={item.name} className="rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900">
          <div className="mb-4 h-28 rounded-lg bg-gradient-to-br from-gold-500/15 to-gray-200 dark:to-zinc-800/80" />
          <h3 className="font-semibold text-black dark:text-white">{item.name}</h3>
          <p className="mt-1 text-sm text-gold-300">{item.price}</p>
        </div>
      ))}
    </div>
  )
}

function FoodList({ items }) {
  return (
    <div className="space-y-4">
      {items?.map((item) => (
        <div
          key={item.name}
          className="flex flex-col justify-between gap-2 rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="font-semibold text-black dark:text-white">{item.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.info}</p>
          </div>
          <span className="text-sm font-semibold text-gold-300">{item.price}</span>
        </div>
      ))}
    </div>
  )
}

function ElectronicsGrid({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items?.map((item) => (
        <div key={item.name} className="rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900">
          <div className="mb-4 h-24 rounded-lg bg-gradient-to-br from-cyan-500/15 to-gray-200 dark:to-zinc-800/80" />
          <h3 className="font-semibold text-black dark:text-white">{item.name}</h3>
          <p className="mt-1 text-sm text-gold-300">{item.price}</p>
        </div>
      ))}
    </div>
  )
}

function ServicesCards({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items?.map((item) => (
        <div key={item.name} className="rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-yellow-500/20 dark:bg-zinc-900">
          <h3 className="font-semibold text-black dark:text-white">{item.name}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
          <button
            type="button"
            className="mt-4 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default function WebsiteDetail() {
  const { id } = useParams()
  const isDataReady = Array.isArray(websites)

  if (!isDataReady) {
    return <div className="min-h-screen bg-white px-6 py-20 text-center text-black dark:bg-black dark:text-white">Loading...</div>
  }

  if (!id) {
    return <Navigate to="/" replace />
  }

  const website = (websites || []).find((entry) => entry.id === id)

  if (!website) {
    return <Navigate to="/" replace />
  }

  const demoItems = categoryDemo[website.category] ?? []

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center rounded-lg border border-gold-500/30 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
      >
        ← Back to Home
      </Link>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 dark:border-yellow-500/20 dark:bg-zinc-900"
      >
        <div className="relative h-60 sm:h-72">
          <img
            src={website.image}
            alt={website.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-gold-400/40 bg-black/65 px-3 py-1 text-xs font-semibold tracking-wide text-gold-300">
              {website.category}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">{website.name}</h1>
            <p className="mt-2 max-w-2xl text-gray-200 dark:text-gray-300">{website.description}</p>
          </div>
        </div>
      </motion.section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-black dark:text-white">Featured {website.category}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Static demo content for this mini website.</p>

        <div className="mt-6">
          {website.category === 'Fashion' && <FashionGrid items={demoItems} />}
          {website.category === 'Food' && <FoodList items={demoItems} />}
          {website.category === 'Electronics' && <ElectronicsGrid items={demoItems} />}
          {website.category === 'Services' && <ServicesCards items={demoItems} />}
        </div>
      </section>
    </div>
  )
}
