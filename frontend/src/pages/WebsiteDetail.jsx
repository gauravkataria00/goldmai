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
        <div key={item.name} className="rounded-xl border border-gold-500/20 bg-zinc-950/90 p-4">
          <div className="mb-4 h-28 rounded-lg bg-gradient-to-br from-gold-500/15 to-zinc-800/80" />
          <h3 className="font-semibold text-zinc-100">{item.name}</h3>
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
          className="flex flex-col justify-between gap-2 rounded-xl border border-gold-500/20 bg-zinc-950/90 p-4 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="font-semibold text-zinc-100">{item.name}</h3>
            <p className="text-sm text-zinc-400">{item.info}</p>
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
        <div key={item.name} className="rounded-xl border border-gold-500/20 bg-zinc-950/90 p-4">
          <div className="mb-4 h-24 rounded-lg bg-gradient-to-br from-cyan-500/15 to-zinc-800/80" />
          <h3 className="font-semibold text-zinc-100">{item.name}</h3>
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
        <div key={item.name} className="rounded-xl border border-gold-500/20 bg-zinc-950/90 p-4">
          <h3 className="font-semibold text-zinc-100">{item.name}</h3>
          <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
          <button
            type="button"
            className="mt-4 rounded-lg border border-gold-500/40 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
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
    return <div className="min-h-screen bg-black px-6 py-20 text-center text-zinc-100">Loading...</div>
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
        className="mt-6 overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/90"
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
            <h1 className="mt-3 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">{website.name}</h1>
            <p className="mt-2 max-w-2xl text-zinc-300">{website.description}</p>
          </div>
        </div>
      </motion.section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-zinc-50">Featured {website.category}</h2>
        <p className="mt-2 text-zinc-400">Static demo content for this mini website.</p>

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
