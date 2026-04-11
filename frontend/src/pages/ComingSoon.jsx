import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
}

const countdownVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 45)
    launchDate.setHours(23, 59, 59, 999)

    const updateTimer = () => {
      const now = Date.now()
      const distance = launchDate.getTime() - now

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: '✅', title: 'Verified Stores' },
    { icon: '✨', title: 'Premium Quality' },
    { icon: '📍', title: 'Location Based Discovery' },
  ]

  const countdownUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-br from-black via-zinc-950 to-black px-4 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(234,179,8,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(250,204,21,0.1), transparent 42%)',
          backgroundSize: '140% 140%',
        }}
      />

      <motion.div
        className="absolute left-[7%] top-[10%] h-40 w-40 rounded-full bg-gold-500/15 blur-3xl"
        animate={{ opacity: [0.18, 0.5, 0.18], scale: [1, 1.14, 1], y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[6%] top-[18%] h-52 w-52 rounded-full bg-gold-400/10 blur-3xl"
        animate={{ opacity: [0.14, 0.4, 0.14], scale: [1, 1.12, 1], y: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-[8%] left-[28%] h-36 w-36 rounded-full bg-gold-300/10 blur-3xl"
        animate={{ opacity: [0.1, 0.28, 0.1], scale: [1, 1.1, 1], x: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col justify-center space-y-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div variants={fadeUpVariants} className="space-y-6 text-center lg:text-left">
            <motion.div variants={fadeUpVariants} className="inline-block rounded-full border border-gold-500/30 bg-black/35 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-gold-300 backdrop-blur-md sm:text-sm">
              🚧 UNDER DEVELOPMENT
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="font-serif text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl md:text-6xl"
            >
              Something{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Powerful
              </span>{' '}
              is Coming
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:mx-0"
            >
              India’s next-gen fashion discovery platform is being crafted.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/918059172716"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{ boxShadow: ['0 0 24px rgba(234,179,8,0.35)', '0 0 34px rgba(234,179,8,0.55)', '0 0 24px rgba(234,179,8,0.35)'] }}
                transition={{ boxShadow: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } }}
                className="rounded-2xl bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 sm:text-base"
              >
                Chat with Himanshu
              </motion.a>

              <motion.a
                href="https://wa.me/918708195687"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{ boxShadow: ['0 0 22px rgba(234,179,8,0.3)', '0 0 32px rgba(234,179,8,0.5)', '0 0 22px rgba(234,179,8,0.3)'] }}
                transition={{ boxShadow: { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 } }}
                className="rounded-2xl border border-gold-400/35 bg-black/45 px-7 py-4 text-sm font-semibold text-gold-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold-300/70 sm:text-base"
              >
                Chat with Gavi
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="rounded-2xl border border-gold-500/25 bg-black/45 p-6 shadow-[0_0_40px_rgba(234,179,8,0.14)] backdrop-blur-xl sm:p-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-gold-300 sm:text-sm">
              Launching Soon
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {countdownUnits.map((unit) => (
                <motion.div
                  key={unit.label}
                  variants={countdownVariants}
                  className="rounded-xl border border-gold-500/25 bg-gradient-to-b from-zinc-900/80 to-black/70 p-4 text-center shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:p-5"
                >
                  <motion.div
                    key={`${unit.label}-${unit.value}`}
                    initial={{ opacity: 0.5, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="font-serif text-3xl font-bold text-gold-300 sm:text-4xl"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-zinc-400 sm:text-xs">{unit.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUpVariants} className="grid gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUpVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-xl border border-gold-500/20 bg-black/35 p-5 text-center shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <p className="mb-3 text-2xl">{feature.icon}</p>
              <p className="text-sm font-medium text-zinc-200 sm:text-base">{feature.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  )
}

export default ComingSoon
