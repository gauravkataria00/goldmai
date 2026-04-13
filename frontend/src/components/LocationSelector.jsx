import { locations } from '../data/shops'

export default function LocationSelector({ selectedLocation, onChange }) {
  if (!Array.isArray(locations)) {
    return <div className="w-full max-w-xs rounded-xl border border-gold-500/30 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100">Loading...</div>
  }

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="location" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
        Select Your Area
      </label>
      <select
        id="location"
        value={selectedLocation}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gold-500/30 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors duration-300 focus:border-gold-400"
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
