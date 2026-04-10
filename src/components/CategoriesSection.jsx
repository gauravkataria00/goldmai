import React from 'react'

export default function CategoriesSection() {
  const categories = [
    { name: 'Phulkari Suits', icon: '👗', color: 'from-pink-600', id: 1 },
    { name: 'Anarkali Suits', icon: '✨', color: 'from-purple-600', id: 2 },
    { name: 'Pathani Kurtas', icon: '👔', color: 'from-blue-600', id: 3 },
    { name: 'Daily Wear', icon: '👕', color: 'from-emerald-600', id: 4 }
  ]

  const getCategoryImage = (id) => `https://picsum.photos/500/500?random=${id * 25}`

  return (
    <section className="py-32 bg-gradient-to-b from-black via-black/90 to-black relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header - BIGGER */}
        <div className="text-center mb-8 sm:mb-12 md:mb-20 animate-fade-in">
          <h2 className="heading-font text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent block">SHOP BY</span>
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent block">CATEGORY</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium px-2">Explore curated collections from premium stores across India</p>
        </div>

        {/* Categories Grid - BIGGER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square cursor-pointer h-full animate-slide-up md:hover:shadow-3xl md:hover:shadow-yellow-600/40 md:hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Image Background */}
              <img
                src={getCategoryImage(category.id)}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-125"
              />

              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 md:group-hover:from-black/85 md:group-hover:via-black/40 md:group-hover:to-black/5 transition duration-300"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/20 to-yellow-600/0 opacity-0 md:group-hover:opacity-100 transition duration-500"></div>

              {/* Premium Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-yellow-600/0 md:group-hover:border-yellow-600/60 rounded-2xl sm:rounded-3xl transition duration-300"></div>

              {/* Content - CENTERED & BIGGER */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                {/* Icon - BIGGER */}
                <div className="text-5xl sm:text-7xl md:text-8xl mb-2 sm:mb-4 md:group-hover:scale-150 md:group-hover:-translate-y-3 transition duration-300">
                  {category.icon}
                </div>

                {/* Category Name - BIGGER */}
                <h3 className="text-2xl md:text-3xl font-black text-yellow-100 group-hover:text-yellow-300 transition duration-300 mb-3 tracking-tight">
                  {category.name}
                </h3>

                {/* Explore Arrow - Shows on Hover with animation */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:translate-y-0 translate-y-3">
                  <i className="fa-solid fa-arrow-down text-yellow-400 text-2xl animate-bounce"></i>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-r from-transparent via-white to-transparent transition duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
            </div>
          ))}
        </div>

        {/* Browse All Button - BIGGER */}
        <div className="text-center mt-20">
          <button className="border-2 border-yellow-600 bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-400 hover:text-yellow-300 px-12 py-5 rounded-3xl font-black text-lg transition hover:scale-110 hover:shadow-lg hover:shadow-yellow-600/30 transform active:scale-95">
            BROWSE ALL CATEGORIES
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
