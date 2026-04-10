import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const launchDate = useMemo(() => {
    const target = new Date()
    target.setDate(target.getDate() + 45)
    return target
  }, [])

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = Math.max(launchDate.getTime() - now.getTime(), 0)

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const trustItems = [
    '✔ Verified Platform in Development',
    '✔ Onboarding Local Fashion Stores',
    '✔ Launching Soon',
  ]

  const particles = [
    { top: '8%', left: '8%', size: 'h-24 w-24', delay: 0 },
    { top: '24%', left: '80%', size: 'h-20 w-20', delay: 0.3 },
    { top: '68%', left: '10%', size: 'h-28 w-28', delay: 0.6 },
    { top: '78%', left: '78%', size: 'h-24 w-24', delay: 0.9 },
  ]

  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900 px-4 text-white">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-r from-gold-500/15 to-gold-300/10 blur-2xl ${particle.size}`}
          style={{ top: particle.top, left: particle.left }}
          animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
        />
      ))}

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-4xl rounded-3xl border border-gold-500/25 bg-black/55 p-6 shadow-[0_0_50px_rgba(234,179,8,0.12)] backdrop-blur-lg sm:p-8 md:p-10"
      >
        <motion.div variants={fadeUp} className="mb-10 flex items-center justify-start">
          <h1 className="heading-font text-xl tracking-[0.18em] text-gold-400 sm:text-2xl">GOLDMAI</h1>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.span
            variants={fadeUp}
            className="inline-flex rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-300 sm:text-sm"
          >
            🚧 Under Development
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="heading-font mt-5 text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          >
            We’re Building Something Powerful
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            India’s next-generation local fashion discovery platform is currently under development. We are onboarding premium local stores.
          </motion.p>

          <motion.div
            variants={fadeUp}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mt-3 h-[2px] w-36 rounded-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />

          <motion.div variants={fadeUp} className="mt-10">
            <h3 className="heading-font text-2xl text-gold-300 sm:text-3xl">Want to join or collaborate?</h3>
            <p className="mt-2 text-zinc-300">Contact us directly on WhatsApp</p>

            <div className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-4 sm:flex-col md:flex-row md:justify-center">
              <motion.a
                href="https://wa.me/918059172716"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.55)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(234,179,8,0.75)] md:w-auto"
              >
                Chat with Himanshu
              </motion.a>

              <motion.a
                href="https://wa.me/918708195687"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-4 text-base font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.55)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(234,179,8,0.75)] md:w-auto"
              >
                Chat with Gavi
              </motion.a>
            </div>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto mt-8 max-w-xl space-y-2 text-left text-sm text-zinc-200 sm:text-base"
          >
            {trustItems.map((item) => (
              <motion.li key={item} variants={fadeUp} className="rounded-lg border border-gold-500/15 bg-zinc-900/55 px-4 py-2">
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-300">Launching Soon</p>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((entry) => (
                <div key={entry.label} className="rounded-xl border border-gold-500/25 bg-zinc-950/80 p-3">
                  <p className="text-xl font-bold text-gold-300 sm:text-2xl">{String(entry.value).padStart(2, '0')}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:text-xs">{entry.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.footer variants={fadeUp} className="mt-9 border-t border-zinc-800 pt-5 text-xs text-zinc-400 sm:text-sm">
            <p>© GOLDMAI</p>
            <p className="mt-1">Built for Local Fashion in India</p>
          </motion.footer>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default App
