import React, {useRef} from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';

const references = [
    {
      id: 1,
      logo: "/kodak.png",
      alt: "kodak logo",
    },
    {
      id: 2,
      logo: "/worf.png",
      alt: "worf logo",
    },
];

const References = () => {

  const titleRef = useRef(null);
  const ref = useRef(null);
  const titleInView = useInView(titleRef, {once: true});
  const inView = useInView(ref, {once: true});

  return (
    <section id="referanslar" className="pt-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            ref={titleRef}
            className="text-4xl font-semibold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }} 
          >Referanslar</motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Dinamik Logo Kartları */}
            {references.map((reference, index) => (
              <motion.div 
                ref={ref}
                key={reference.id} 
                className="flex justify-center items-center bg-gradient-to-b from-white to-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={reference.logo}
                  alt={reference.alt}
                  width={150} 
                  height={100} 
                  className="object-contain h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default References