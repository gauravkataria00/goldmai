import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const categoryOptions = ['Fashion', 'Food', 'Electronics', 'Services']
const locationOptions = ['Karnal', 'Rambha', 'Nissing']

export default function AddStorePage({ onAddStore }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    category: 'Fashion',
    location: 'Karnal',
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
      <div className="overflow-hidden rounded-3xl border border-gold-500/25 bg-zinc-950/80 p-6 sm:p-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.14em] text-gold-300">Store Onboarding</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-zinc-50 sm:text-4xl">Add Store</h2>
          <p className="mt-2 text-zinc-400">Create a demo store and publish it instantly to your local session.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Store Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Royal Boutique"
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Owner Name</label>
              <input
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Owner Name"
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
              >
                {categoryOptions?.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
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
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Area</label>
              <input
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Sector 14"
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">WhatsApp Number</label>
              <input
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="919999999999"
                className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Premium local store with curated products and trusted service."
              className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-400">Upload Image (Dummy)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-gold-500/30 bg-black/60 px-4 py-3 text-sm text-zinc-300 file:mr-4 file:rounded-lg file:border-0 file:bg-gold-500 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-black"
            />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(234,179,8,0.56)]"
          >
            Create Demo Store
          </button>
        </form>
      </div>
    </section>
  )
}
