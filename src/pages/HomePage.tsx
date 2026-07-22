import React from 'react'
import HeroSection from '../views/HeroSection'
import LogoCarousle from '../views/LogoCarousle'


export default function HomePage() {
  return (
    <div className='min-h-screen bg-black text-white'>

      {/* Hero Section */}
      <HeroSection />

      {/* Logo Carousel Section */}
      <LogoCarousle />
    </div>
  )
}