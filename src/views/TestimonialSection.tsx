import React from 'react'
import { testimonials } from '../assets/data'
import { useRef } from 'react'

export default function TestimonialSection() {

    const marqueeRef = useRef<HTMLDivElement | null>(null)

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.setProperty('--marquee-play-state', 'paused')
        }
    }

    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.style.setProperty('--marquee-play-state', 'running')
        }
    }

  return (
    <section className='py-8 lg:py-16 overflow-hidden'>
        <div className=''>

            {/* Title */}
            <div className='text-center mb-8'>
                <h2 className='text-2xl lg:text-5xl font-normal mb-4 clash-display'>Trusted by Traders</h2>
                <p className='text-zinc-400/90 text-md lg:text-lg'>Join thousands of satisfied traders on ForexTrade</p>
            </div>

            {/* MARQUEE */}
            <div 
                ref={marqueeRef}
                className='relative flex flex-col antialiased'
            >
                {/* Container */}
                <div 
                    style={{
                        animationPlayState: 'var(--marquee-play-state)'
                    }}
                    className='animate-marquee relative flow py-4'
                >
                    <div className='min-w-full flex shrink-0 items-stretch gap-4 lg:gap-8'>
                        {
                            testimonials.map((testimonials, index) => (
                                <div 
                                    key={index} 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className='w-[280px] lg:w-[400px] cursor-pointer shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl'
                                >
                                    {/* Images & Name */}
                                    <div className='centered-row gap-4 mb-6'>
                                        {/* Images */}
                                        <div className='h-10 lg:h-12 w-10 lg:w-12 overflow-clip rounded-lg lg:rounded-xl center-item text-center bg-pink-500'>
                                            <img src={testimonials.image ?? ''} alt="image" />
                                            {!testimonials.image ? testimonials.name[0] : ""}
                                        </div>
                                        {/* name & role */}
                                        <div>
                                            <h4 className='font-medium text-sm lg:text-lg clash-display text-white/90'>{testimonials.name}</h4>
                                            <p className='text-xs lg:text-sm text-white/60'>{testimonials.role}</p>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <p className='text-white/70 text-xs lg:text-sm leading-relaxed w-full text-justify tracking-tighter'>{testimonials.content}</p>
                                </div>
                            )) 
                        }
                    </div>
                </div>
                <div className='absolute h-full w-[15%] flex -left-1'>
                    <div className='h-full w-[50%] bg-black' />
                    <div className='h-full w-[50%] bg-gradient-to-r from-black to-transparent -left-1' />
                </div>
                <div className='absolute h-full w-[15%] flex -right-1'>
                    <div className='h-full w-[50%] bg-gradient-to-l from-black to-transparent -right-1' />
                    <div className='h-full w-[50%] bg-black' />
                </div>
            </div>
        </div>
    </section>
  )
}
