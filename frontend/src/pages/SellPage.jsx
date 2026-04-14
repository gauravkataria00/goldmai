export default function SellPage() {
  const benefits = [
    'Reach premium local customers across Karnal, Rambha, and Nissing',
    'Showcase your products with detailed listings and WhatsApp leads',
    'Grow your boutique business with a luxury-first marketplace audience',
  ]

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 p-8 dark:border-yellow-500/20 dark:bg-zinc-900 sm:p-10">
        <p className="text-xs uppercase tracking-[0.14em] text-gray-600 dark:text-gray-400">Seller Onboarding</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-black dark:text-white sm:text-5xl">Start Selling on GOLDMAI</h1>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-400">
          Join GOLDMAI and position your store in front of verified local shoppers looking for premium fashion.
        </p>

        <ul className="mt-8 space-y-3">
          {benefits?.map((benefit) => (
            <li key={benefit} className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-black dark:border-yellow-500/20 dark:bg-black/40 dark:text-white">
              ✓ {benefit}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/918059172716?text=I%20want%20to%20sell%20on%20GOLDMAI"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-yellow-400"
        >
          Contact on WhatsApp
        </a>
      </div>
    </section>
  )
}
