import React from 'react'
import HeroSection from '../views/HeroSection'
import LogoCarousle from '../views/LogoCarousle'
import FeaturesSection from '../views/FeaturesSection'
import PricingSection from '../views/PricingSection'
import TestimonialSection from '../views/TestimonialSection'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-black text-white'>

      {/* Hero Section */}
      <HeroSection />

      {/* Logo Carousel Section */}
      <LogoCarousle />

      {/* Feature Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testinomial Section */}
      <TestimonialSection />
    </div>
  )
}