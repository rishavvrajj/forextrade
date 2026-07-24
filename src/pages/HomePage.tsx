import React from 'react'
import HeroSection from '../views/HeroSection'
import LogoCarousle from '../views/LogoCarousle'
import FeaturesSection from '../views/FeaturesSection'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-black text-white'>

      {/* Hero Section */}
      <HeroSection />

      {/* Logo Carousel Section */}
      <LogoCarousle />

      {/* Feature Section */}
      <FeaturesSection />
    </div>
  )
}