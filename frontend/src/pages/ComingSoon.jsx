import { useEffect } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

function ComingSoon() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 py-6">
      <motion.div
        className="absolute left-[10%] top-[12%] h-28 w-28 rounded-full bg-gold-500/15 blur-3xl"
        animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[10%] bottom-[14%] h-32 w-32 rounded-full bg-gold-400/15 blur-3xl"
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl rounded-3xl border border-gold-500/25 bg-black/55 p-6 text-center shadow-[0_0_45px_rgba(234,179,8,0.15)] backdrop-blur-md sm:p-10"
      >
        <motion.p variants={fadeUpVariants} className="text-left font-serif text-xl tracking-[0.18em] text-gold-400 sm:text-2xl">
          GOLDMAI
        </motion.p>

        <motion.span
          variants={fadeUpVariants}
          className="mt-8 inline-flex rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-300 sm:text-sm"
        >
          🚧 Under Development
        </motion.span>

        <motion.h1
          variants={fadeUpVariants}
          className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          We’re Building Something Powerful
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base"
        >
          India’s next-gen local fashion discovery platform is under development.
        </motion.p>

        <motion.div variants={fadeUpVariants} className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-4 md:flex-row md:justify-center">
          <motion.a
            href="https://wa.me/918059172716"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.55)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(234,179,8,0.78)] md:w-auto"
          >
            Chat with Himanshu
          </motion.a>

          <motion.a
            href="https://wa.me/918708195687"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.55)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(234,179,8,0.78)] md:w-auto"
          >
            Chat with Gavi
          </motion.a>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default ComingSoon
