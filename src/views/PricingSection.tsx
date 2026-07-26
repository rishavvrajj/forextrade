import React from 'react'
import PricingTier from '../components/PricingTier'
import { pricingData } from '../assets/data'

export default function PricingSection() {
  return (
    <section className='container mx-auto w-[90%] py-10'>
        {/* Title  */}
        <div className='text-center mb-8 flex flex-col justify-center items-center gap-1'>
            <h2 className='text-xl lg:text-5xl md:text-6xl lg:mb-6 clash-display'>Choose Your<span className='grad1 clash-display'> Tranding Plan</span></h2>
            <p className='text-xs lg:text-lg w-[90%] lg:w-full text-zinc-300/80'><span>Select the perfect trading plan with advanced features and competitive fees.</span></p>
        </div>
        {/* Subscription Card */}
        <div className='flex flex-col lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pricingData.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>
    </section>
  )
}
