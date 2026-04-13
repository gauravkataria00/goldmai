export default function SellPage() {
  const benefits = [
    'Reach premium local customers across Karnal, Rambha, and Nissing',
    'Showcase your products with detailed listings and WhatsApp leads',
    'Grow your boutique business with a luxury-first marketplace audience',
  ]

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-gold-500/25 bg-zinc-950/80 p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Seller Onboarding</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-zinc-50 sm:text-5xl">Start Selling on GOLDMAI</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Join GOLDMAI and position your store in front of verified local shoppers looking for premium fashion.
        </p>

        <ul className="mt-8 space-y-3">
          {benefits?.map((benefit) => (
            <li key={benefit} className="rounded-xl border border-gold-500/20 bg-black/40 px-4 py-3 text-zinc-200">
              ✓ {benefit}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/918059172716?text=I%20want%20to%20sell%20on%20GOLDMAI"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
        >
          Contact on WhatsApp
        </a>
      </div>
    </section>
  )
}
