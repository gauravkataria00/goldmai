import React, { useState } from 'react'

export default function VendorPanel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    phone: '',
    address: '',
    category: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted! We will review and contact you soon.')
  }

  return (
    <div className="min-h-screen py-12 bg-black">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="heading-font text-5xl font-bold mb-4 text-yellow-100">Become a Vendor</h1>
        <p className="text-gray-300 text-lg mb-8">Join thousands of sellers on GOLDMAI</p>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
              required
            />
          </div>

          <input
            type="text"
            name="shopName"
            placeholder="Shop Name"
            value={formData.shopName}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
            required
          />

          <textarea
            name="address"
            placeholder="Shop Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
            required
          ></textarea>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-yellow-900/50 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition"
            required
          >
            <option value="">Select Category</option>
            <option value="phulkari">Phulkari Suits</option>
            <option value="anarkali">Anarkali Suits</option>
            <option value="pathani">Pathani Kurtas</option>
            <option value="daily">Daily Wear</option>
          </select>

          <button
            type="submit"
            className="gold-button w-full py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition"
          >
            Apply as Vendor
          </button>
        </form>
      </div>
    </div>
  )
}
