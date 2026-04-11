import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const navItems = ['Home', 'Stores', 'Shop', 'Vendor Panel']

  return (
    <div
      className="min-h-screen overflow-x-hidden overflow-y-auto bg-black text-zinc-100"
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-gold-500/20 bg-black/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 md:flex-nowrap md:justify-between">
            <div className="min-w-[170px]">
              <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-400 sm:text-3xl">GOLDMAI</h1>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">Luxury Fashion Marketplace</p>
            </div>

            <div className="order-3 flex w-full justify-center gap-5 text-sm font-medium text-zinc-300 md:order-2 md:w-auto md:gap-8">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition-colors duration-300 hover:text-gold-400">
                  {item}
                </a>
              ))}
            </div>

            <div className="order-2 ml-auto flex items-center gap-3 md:order-3 md:ml-0">
              <div className="hidden items-center rounded-full border border-gold-500/20 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-400 shadow-[0_0_20px_rgba(234,179,8,0.12)] sm:flex">
                <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-4 w-4 stroke-current" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span>Search styles, stores...</span>
              </div>

              <button
                type="button"
                className="relative rounded-full border border-gold-500/30 bg-zinc-950/90 p-2.5 text-zinc-200 transition-colors duration-300 hover:text-gold-300"
                aria-label="Cart"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                  <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h9.8a1 1 0 0 0 1-.8L21 7H7" />
                </svg>
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-black">
                  2
                </span>
              </button>
            </div>

            <div className="order-4 w-full sm:hidden">
              <div className="flex items-center rounded-full border border-gold-500/20 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-400">
                <svg viewBox="0 0 24 24" fill="none" className="mr-2 h-4 w-4 stroke-current" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span>Search styles, stores...</span>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <section className="relative isolate min-h-[calc(100vh-88px)] bg-black">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury fashion background"
            className="h-full w-full object-cover opacity-30 blur-[1px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(234,179,8,0.14),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(161,98,7,0.10),transparent_40%)]" />
        </div>

        <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              GOLDMAI —{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Style That Feels Expensive
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Discover premium ethnic and modern fashion from curated Indian brands. Designed for those who don’t dress average.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(234,179,8,0.56)] sm:text-base"
              >
                Explore Collection
              </button>
              <button
                type="button"
                className="rounded-xl border border-gold-500/60 bg-black/30 px-8 py-3.5 text-sm font-semibold text-gold-300 transition-all duration-300 hover:scale-[1.02] hover:bg-gold-500/10 sm:text-base"
              >
                Become a Seller
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-10 inline-flex rounded-full border border-gold-500/20 bg-zinc-950/75 px-5 py-2 text-xs tracking-wide text-zinc-300 sm:text-sm"
            >
              4.9/5 rating • 12k+ happy shoppers • India-wide delivery
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

