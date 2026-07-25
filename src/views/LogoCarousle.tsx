import { motion } from "framer-motion"

export default function LogoCarousle() {

    const logos = [
        "/log1.png",
        "/log2.png",
        "/log3.png",
        "/log4.png",
        "/log5.png"
    ]

    const extentedLogos = [...logos, ...logos, ...logos]

    return (
        <div className='w-full flex relative overflow-hidden cursor-pointer backdrop-blur-sm my-5'>
            <motion.div
                className='flex space-x-8 lg:space-x-16 1'
                style={{
                    width: 'fit-content',
                    display: 'flex',
                    gap: '4rem '
                }}
                initial={{
                    opacity: 0,
                    x: "0%"
                }}
                animate={{
                    opacity: 1,
                    x: '-50%'
                }}
                transition={{
                    opacity: { duration: 0.5 },
                    x: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }
                }}
            >
                {extentedLogos.map((logo) => (
                    <motion.img
                        key={logo}
                        src={logo}
                        alt="logo"
                        className='h-4 lg:h-8 object-contain'
                        initial={{
                            opacity: 0.5
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    />
                ))}
            </motion.div>
            <div className='absolute h-full w-[15%] flex -left-1'>
                <div className='h-full w-[50%] bg-black' />
                <div className='h-full w-[50%] bg-gradient-to-r from-black to-transparent -left-1' />
            </div>
            <div className='absolute h-full w-[15%] flex -right-1'>
                <div className='h-full w-[50%] bg-gradient-to-l from-black to-transparent -right-1' />
                <div className='h-full w-[50%] bg-black' />
            </div>        </div>
    )
}