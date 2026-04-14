import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function WebsiteCard({ website }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group h-full"
    >
      <Link
        to={`/site/${website.id}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_0_22px_rgba(234,179,8,0.08)] transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_0_28px_rgba(234,179,8,0.22)] dark:border-yellow-500/20 dark:bg-zinc-900"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={website.image}
            alt={website.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-gold-400/40 bg-black/70 px-3 py-1 text-xs font-semibold tracking-wide text-gold-300">
            {website.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h4 className="font-serif text-xl font-bold text-black transition-colors duration-300 group-hover:text-gold-300 dark:text-white">
            {website.name}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {website.description}
          </p>
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-gold-300">
            Enter Website
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
