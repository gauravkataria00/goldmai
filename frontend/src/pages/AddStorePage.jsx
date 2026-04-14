import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeLocations } from '../data/stores'

const categoryOptions = ['Fashion', 'Food', 'Electronics', 'Services']
const locationOptions = storeLocations

export default function AddStorePage({ onAddStore }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    category: 'Food',
    location: 'Panipat',
    area: '',
    whatsappNumber: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1200&q=80',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (typeof onAddStore === 'function') {
      onAddStore(formData)
    }

    navigate('/stores')
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-6 dark:border-yellow-500/20 dark:bg-zinc-900 sm:p-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Store Onboarding</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-black dark:text-white sm:text-4xl">Add Store</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Create a demo store and publish it instantly to your local session.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Store Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Royal Boutique"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Owner Name</label>
              <input
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Owner Name"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              >
                {categoryOptions?.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              >
                {locationOptions?.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Area</label>
              <input
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Sector 14"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">WhatsApp Number</label>
              <input
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="919999999999"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Premium local store with curated products and trusted service."
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">Upload Image (Dummy)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-gold-500 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-black dark:border-yellow-500/20 dark:bg-black/60 dark:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-2xl bg-yellow-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
          >
            Create Demo Store
          </button>
        </form>
      </div>
    </section>
  )
}
