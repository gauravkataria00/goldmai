import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-gold-500/20 bg-black/80 backdrop-blur-md"
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl font-bold text-gold-400">GOLDMAI</h1>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition">
                Shop
              </a>
              <a href="#" className="hover:text-gold-400 transition">
                Stores
              </a>
              <a href="#" className="hover:text-gold-400 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 py-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-20 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-gold-400/10 blur-3xl" />
        </div>

        <motion.div variants={container} className="relative z-10 text-center">
          <motion.h2 variants={fadeUp} className="font-serif text-5xl font-bold sm:text-6xl">
            India's Fashion Discovery
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-xl text-zinc-300">
            Find premium local stores near you
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-gold-500 px-8 py-3 font-semibold text-black hover:bg-gold-400 transition">
              Explore Stores
            </button>
            <button className="rounded-lg border border-gold-500 px-8 py-3 font-semibold text-gold-400 hover:bg-gold-500/10 transition">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h3 variants={fadeUp} className="text-center font-serif text-4xl font-bold mb-16">
            Why GOLDMAI?
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏪', title: 'Local Stores', desc: 'Discover verified fashion stores in your city' },
              { icon: '⭐', title: 'Premium Quality', desc: 'Hand-picked stores with premium collections' },
              { icon: '📍', title: 'Location Based', desc: 'Find stores near you with ease' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-xl border border-gold-500/20 bg-zinc-950/50 p-8 backdrop-blur-sm hover:border-gold-500/50 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-serif text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-zinc-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-4 my-20 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-gold-500/10 to-zinc-900 px-8 py-16 text-center"
      >
        <h3 className="font-serif text-3xl font-bold mb-4">Ready to Explore?</h3>
        <p className="text-zinc-300 mb-8">Start discovering premium fashion stores in your area today.</p>
        <button className="rounded-lg bg-gold-500 px-8 py-3 font-semibold text-black hover:bg-gold-400 transition">
          Get Started
        </button>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gold-500/20 bg-zinc-950/50 px-4 py-12"
      >
        <div className="mx-auto max-w-6xl text-center text-zinc-400">
          <p>© 2026 GOLDMAI. Built for local fashion in India.</p>
        </div>
      </motion.footer>
    </div>
  )
}

