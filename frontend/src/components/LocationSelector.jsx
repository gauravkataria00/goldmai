import { locations } from '../data/shops'

export default function LocationSelector({ selectedLocation, onChange }) {
  if (!Array.isArray(locations)) {
    return <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black shadow-sm dark:border-yellow-500/20 dark:bg-zinc-900 dark:text-white dark:shadow-none">Loading...</div>
  }

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="location" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400">
        Select Your Area
      </label>
      <select
        id="location"
        value={selectedLocation}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors duration-300 focus:border-gold-400 dark:border-yellow-500/20 dark:bg-black/60 dark:text-white"
      >
        {locations?.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  )
}
