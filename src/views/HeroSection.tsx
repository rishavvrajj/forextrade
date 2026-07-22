import React from 'react'
import { Command, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className='relative container left-1/2 -translate-x-1/2 w-[90%] pt-24 pb-10 lg:pt-30'>

      {/* Decorative Sub-Title */}
      <div className='flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass'>
        <span className='text-sm font-medium text-zinc-300'>
          <Command className='w-4 h-4 inline-block mr-2' />
          Next-gen trading platform
        </span>
      </div>

      {/* Hero Title */}
      <div className='relative z-1'>

        {/* Heading */}
        <h1 className='w-[90%] text-3xl md:text-7xl mb-4 tracking-tight text-left'>
          <span className='clash-display grad1'>Trade forex with</span>
          <br />
          <span className='text-zinc-50 font-medium clash-display'>confidence & Security</span>
        </h1>

        {/* Paragraph */}
        <p className='text-xs lg:text-lg text-zinc-300/80 mb-8 text-left w-[100%] md:w-[60%] lg:w-[70%]'>
          Experience seamless forex trading with advanced features, real-time analytics, and institutional-grade security. <br className='md:hidden lg:hidden' />
          <span className='text-zinc-200'> Start trading in minutes.</span>
        </p>

        {/* Button */}
        <div className='flex sm:flex-row gap-4 items-start'>
          <button className='bg-indigo-500 text-xs lg:text-base clash-display px-2 lg:px-4 py-2 lg:py-3 rounded-xl lg:rounded-2xl cursor-pointer hover:-translate-y-1 transition hover:bg-indigo-500/20'>Start Trading Now</button>
          <button className='text-zinc-100 text-xs lg:text-base clash-display px-2 lg:px-4 py-2 lg:py-3 rounded-xl lg:rounded-2xl cursor-pointer centered-row glass gap-2 hover:-translate-y-1 transition2 hover:bg-indigo-500/20'>View Markets <ArrowRight className='w-4 h-4' /></button>
        </div>
      </div>

      {/* Hero Image : UI Image */}
      <div className='relative mx-auto mt-10'>
        <div className='glass rounded-xl overflow-hidden'>
          <img src="/chart2.png" alt="dashboard" className='w-full h-auto' />
        </div>
      </div>
    </section>
  )
}
