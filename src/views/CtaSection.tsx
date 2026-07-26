import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className='container mx-auto w-[90%] py-8 relative bg-black'>
      <div className='absolute inset-0 opacity-40' style={{ backgroundImage:"url('/crack.png')", backgroundPosition:'center',backgroundRepeat:'no-repeat'}}/>
        <div className='bg-[#0a0a0a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10'>
          <h2 className='text-2xl lg:text-3xl md:text-4xl clash-display mb-4'>Ready to start trading?</h2>
          <p className='text-md lg:text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80'>Join thousands of traders who have already discovered the platform.</p>
          <button className='centered-row mx-auto text-md lg:text-lg bg-gradient-to-r from-indigo-400 to-indigo-600 clash-display hover:-translate-y-1 transition text-zinc-50 py-3 rounded-full px-3 cursor-pointer'>Create Account <ArrowRight className='ml-2 w-4 h-4' />{" "}</button>
        </div>
    </section>
  )
}
