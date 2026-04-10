import React from 'react'

export default function TestimonialSection() {
  const testimonials = [
    { name: 'Priya Singh', city: 'Delhi', rating: 5, text: 'Best quality Punjabi outfits! Absolutely love it. Highly recommended!', id: 1 },
    { name: 'Harman Kaur', city: 'Mumbai', rating: 5, text: 'Authentic designs with premium quality. Fast delivery too!', id: 2 },
    { name: 'Jyoti Sharma', city: 'Bangalore', rating: 5, text: 'The craftsmanship is incredible. Worth every penny!', id: 3 }
  ]

  const getAvatarUrl = (id) => `https://picsum.photos/200/200?random=${id * 50}`

  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 text-lg">Join thousands of satisfied shoppers across India</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-lg"></div>

              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-yellow-600/30 rounded-2xl p-8 transition duration-300">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                  <span className="text-yellow-600/50 text-2xl mr-1">"</span>
                  {testimonial.text}
                  <span className="text-yellow-600/50 text-2xl ml-1">"</span>
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-600 to-transparent mb-6 group-hover:w-20 transition duration-300"></div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <img
                    src={getAvatarUrl(testimonial.id)}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-yellow-600/30 group-hover:ring-yellow-600/60 transition duration-300"
                  />

                  {/* Name & City */}
                  <div className="flex-1">
                    <p className="font-bold text-yellow-100 group-hover:text-yellow-400 transition duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-yellow-600"></i>
                      {testimonial.city}
                    </p>
                  </div>

                  {/* Quote Icon */}
                  <div className="text-yellow-600/20 group-hover:text-yellow-600/50 transition duration-300 text-2xl">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Share your experience with GOLDMAI</p>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-600/50 transition hover:scale-105">
            <i className="fa-solid fa-star mr-2"></i>
            Write a Review
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
