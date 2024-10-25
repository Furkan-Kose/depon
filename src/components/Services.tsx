"use client";

import React, { useRef } from 'react'
import { FaHandshake, FaStore, FaTruck } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Satış Hizmetleri",
    description: "Bayilerimiz aracılığıyla otomotiv, kozmetik, gıda ve GSM aksesuarlarının satışını gerçekleştiriyoruz.",
    icon: FaStore,
  },
  {
    id: 2,
    title: "Dağıtım Hizmetleri",
    description: "Ürünlerinizin Türkiye genelinde güvenli ve hızlı dağıtımını sağlıyoruz.",
    icon: FaTruck,
  },
  {
    id: 3,
    title: "Bayilik Hizmetleri",
    description: "Türkiye çapında bayilikler vererek geniş bir satış ve dağıtım ağı sunuyoruz.",
    icon: FaHandshake,
  },
];

const Services = () => {

  const ref = useRef(null)
  const inView = useInView(ref, {once: true})

  return (
    <section ref={ref} id="hizmetlerimiz" className="pt-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={ref}
          className="text-4xl font-bold text-center mb-12 text-gray-800 py-4 w-fit mx-auto px-8 rounded-full shadow-lg bg-gradient-to-r from-slate-50 to-red-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }} 
        >Hizmetlerimiz</motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dinamik Hizmet Kartları */}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 text-center transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-r from-red-500 to-gray-900 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;