import React, { useEffect, useState } from 'react'
import { Command } from 'lucide-react'

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id='navbar' className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${isScrolled ? "h-16 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] rounded-full" : "h-16 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[95%] rounded-3xl"}`}>
        <div className='h-full px-6'>
          <nav className='centered-row justify-between h-full'>
          {/* Logo */}
          <div className='centered-row space-x-2 cursor-pointer'>
            <Command className='w-4 md:w-5 h-4 md:h-5 text-indigo-400' />
            <span className='font-bold text-sm lg:text-base clash-display text-white'>
              ForexTrade
            </span>
          </div>

          {/* Desktop View */}
          <div className='hidden md:centered-row space-x-5 lg:space-x-15'>
            {
              ['Features', 'Price', 'Testmonials'].map((item,index) => (
                <a key={index} href="nav_link" className='text-sm text-zinc-300/90 hover:text-indigo-300 hover:-translate-y-1 ease-out transition-all duration-300'>
                  {item}
                </a>
              ))
            }
          </div>

          {/* Button */}
          <button className='hidden md:centered-row clash-display text-sm bg-gradient-to-r from-indigo-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:scale-105 duration-200 transition-all ease-out hover:shadow-[0_0_3px_3px] hover:shadow-indigo-600'>
            Start Trading
          </button>

          {/* Mobile View */}
          <div className='md:hidden glass p-1 rounded-md hover:scale-105'>
            <img src="/menu.svg" alt="menu-icon" className='w-4'/>
          </div>
          </nav>
        </div>
    </header>
  )
}
