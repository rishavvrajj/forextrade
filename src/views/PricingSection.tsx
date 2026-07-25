import React from 'react'
import PricingTier from '../components/PricingTier'

const pricingData = [
  {
    name: 'Basic',
    price: '$29/mo',
    description: 'Ideal for beginners starting their trading journey.',
    features: ['Real-time charts', 'Trade signals', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$59/mo',
    description: 'For active traders who need advanced tools.',
    features: ['Advanced analytics', 'Priority support', 'Low fees'],
  },
  {
    name: 'Elite',
    price: '$99/mo',
    description: 'Best for professional traders and institutions.',
    features: ['Dedicated account manager', 'Premium alerts', 'Custom reports'],
  },
]

export default function PricingSection() {
  return (
    <section className='container mx-auto px-4 py-24'>
        {/* Title  */}
        <div className='max-w-2xl mx-auto text-center mb-12'>
            <h2 className='text-5xl md:text-6xl mb-6 clash-display'>Choose Your<span className='grad1 clash-display'> Tranding Plan</span></h2>
            <p className='text-lg text-zinc-300/80'>Select the perfect trading plan with advanced features and competitive fees.</p>
        </div>
        {/* Subscription Card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {pricingData.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>
    </section>
  )
}
