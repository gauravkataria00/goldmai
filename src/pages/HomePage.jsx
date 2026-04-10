import React from 'react'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedProducts from '../components/FeaturedProducts'
import NearbyStoresSection from '../components/NearbyStoresSection'
import TestimonialSection from '../components/TestimonialSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <NearbyStoresSection />
      <TestimonialSection />
    </div>
  )
}
