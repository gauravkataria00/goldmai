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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateDeviceMode = () => setIsMobile(mediaQuery.matches)

    updateDeviceMode()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateDeviceMode)
      return () => mediaQuery.removeEventListener('change', updateDeviceMode)
    }

    mediaQuery.addListener(updateDeviceMode)
    return () => mediaQuery.removeListener(updateDeviceMode)
  }, [])

  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 2)
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

  const sectionVariants = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.04,
          },
        },
      }
    : containerVariants

  const itemVariants = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.24,
            ease: 'easeOut',
          },
        },
      }
    : fadeUpVariants

  const timerVariants = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
      }
    : countdownVariants

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f5f7fc] via-white to-[#f8f9fb] px-4 py-12 text-black dark:from-black dark:via-[#0a0a0a] dark:to-zinc-950 dark:text-white sm:px-8 sm:py-14 md:px-12 md:py-16"
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'auto' }}
    >
      {isMobile ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(234,179,8,0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(250,204,21,0.06), transparent 42%)',
          }}
        />
      ) : (
        <>
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
        </>
      )}

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col justify-center space-y-12">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gradient-to-r from-gold-500/10 to-gold-400/5 px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-gold-400 shadow-sm dark:border-gold-400/30 dark:shadows-none sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
              </span>
              LAUNCHING SOON
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl font-bold leading-tight tracking-tight text-black dark:text-white sm:text-6xl lg:text-7xl"
            >
              The Premium Fashion
              <span className="mt-2 block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">Discovery Platform</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl lg:mx-0"
            >
              Discover verified local fashion stores, explore curated collections, and earn instant cashback on every purchase. India's next-generation luxury marketplace.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <motion.a
                href="https://wa.me/918059172716"
                target="_blank"
                rel="noreferrer"
                whileHover={isMobile ? { opacity: 0.95 } : { scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-8 py-3.5 text-sm font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-gold-500/30 sm:text-base"
              >
                Connect with Himanshu
              </motion.a>

              <motion.a
                href="https://wa.me/918708195687"
                target="_blank"
                rel="noreferrer"
                whileHover={isMobile ? { opacity: 0.95 } : { scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-md hover:shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:hover:border-gold-400/50 sm:text-base"
              >
                Connect with Gavi
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:shadow-2xl sm:p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-1">
                  Coming In
                </p>
                <p className="text-2xl font-bold text-black dark:text-white">Countdown</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 flex items-center justify-center">
                <span className="text-lg font-bold text-black">⏱</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-4 xl:gap-5">
              {countdownUnits?.map((unit) => (
                <motion.div
                  key={unit.label}
                  variants={timerVariants}
                  className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 text-center shadow-sm hover:shadow-lg hover:border-gold-300/40 transition-all duration-300 dark:border-gray-800 dark:from-zinc-800/50 dark:to-zinc-900/50 dark:hover:border-gold-400/40 sm:p-6"
                >
                  <motion.div
                    key={`${unit.label}-${unit.value}`}
                    initial={{ opacity: 0.6, y: isMobile ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.16 : 0.28, ease: 'easeOut' }}
                    className="font-serif text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent sm:text-5xl"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-600 dark:text-gray-400 group-hover:text-gold-400 transition-colors duration-300">{unit.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pt-8">
          <motion.div variants={itemVariants} className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400 mb-2">What's Inside</p>
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">Premium Features</h2>
          </motion.div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            {features?.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUpVariants}
                whileHover={isMobile ? { opacity: 0.95 } : { y: -6, scale: 1.02 }}
                transition={isMobile ? { duration: 0.2 } : { delay: index * 0.08 }}
                className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-xl hover:border-gold-300/40 transition-all duration-300 dark:border-gray-800 dark:from-zinc-800/50 dark:to-zinc-900/50 dark:hover:border-gold-400/40 sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/5 rounded-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
                  <p className="text-lg font-semibold text-black dark:text-white group-hover:text-gold-400 transition-colors duration-300">{feature.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default ComingSoon
