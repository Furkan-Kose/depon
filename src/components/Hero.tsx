import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center md:justify-between bg-gradient-to-r from-slate-50 to-red-200 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-6 max-md:pt-40">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 max-md:h-[40&] flex flex-col max-md:items-center gap-4 md:gap-6 text-center md:text-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl font-bold text-black">
          Depon
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Güçlü satış ve dağıtım ağımızla, markanızı güvenle büyütün. Bayilik fırsatlarıyla işinizi bir adım öteye taşıyın.
        </p>
        <a
          href="#iletisim"
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 w-fit"
        >
          iletişime geçin
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-2/3 md:w-1/2 flex justify-center max-md:h-[40&]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="/bg.png"
          alt="Aue Depon Görseli"
          width={500}
          height={500}
          className="object-cover"
        />
      </motion.div>
    </section>
  )
}

export default Hero
