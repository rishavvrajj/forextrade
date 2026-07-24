import { motion, AnimatePresence } from 'framer-motion'
import { features } from '../assets/data'
import { useEffect, useRef, useState } from 'react'

export default function FeaturesSection() {

    const [activeIndex, SetActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                SetActiveIndex((prev) => (prev + 1) % features.length);
            }, 4000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPaused])

    const handleHover = (index: number) => {
        setIsPaused(true);
        SetActiveIndex(index);
    }

    const handleLeave = () => {
        setIsPaused(false);
    }

    return (
        <section className="relative container -translate-x-1/2 left-1/2 w-[90%] py-10">

            {/* Title */}
            <div className='mb-10'>
                <h2 className='text-3xl md:text-6xl mb-6 tracking-tight clash-display text-left'>
                    Advanced Trading
                    <br />
                    <span className="font-medium clash-display grad1">Features & Tools</span>
                </h2>

                <p className="text-xs w-[80%] md:text-lg text-zinc-300/80 text-left">Experience professional-grade trading tools and features designed for both noive and experience crypto traders.</p>
            </div>

            {/* Features Content */}
            <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>

                {/* Left: Tab Triggers */}
                <div className='md:col-span-5 space-y-3'>
                <div className="col w-full h-auto p-0 space-y-3">

                    {
                        features.map((feature, index) => (
                            <div 
                                key={index}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={handleLeave}
                                onClick={() => SetActiveIndex(index)}
                                className={`flex gap-4 cursor pointer hover:indigo-500/10 p-2 transition-all duration-300 ease-out border border-white/10 rounded-xl
                                    ${activeIndex === index ? "border-indigo-400/40 bg-indigo-500/10" : "border-transparent"}`}
                            >
                                {/* Icons */}
                                <div className='p-1'>
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <div className='col gap-1'>
                                    <h3 className='text-md md:text-base clash-display text-indigo-300'>{feature.title}</h3>
                                    <p className='text-zinc-300/80 text-xs lg:text-sm'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                </div>

                {/* Right Images */}
                <div className='md:col-span-7 min-h-[230px] md:min-h-[260px] centered-row'>
                    <AnimatePresence mode='wait'>

                    <motion.div 
                        key={features[activeIndex].title}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -60}}
                        transition={{ duration: 0.5, ease: 'easeOut'}}
                        className='glass rounded-xl overflow-hidden w-full h-full relative'
                    >
                        <div className="absolute inset-0">
                            <img src={features[activeIndex].image} alt="feature-images" className='w-full h-fit object- relative z-10' />
                        </div>
                    </motion.div>

                    </AnimatePresence>
                </div>
            </div>
            </div>

        </section>
    )
}