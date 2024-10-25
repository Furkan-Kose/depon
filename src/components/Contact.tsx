"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt } from 'react-icons/fa';

const contactDetails = {
  address: "Yavuz Sultan Selim Mah., Candaş Sk. No:10 A Körfez/Kocaeli",
  phone: "+90 262 348 1111",
  mobile: "+90 541 256 42 72",
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});

  return (
    <section id="iletisim" className="py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={ref}
          className="text-4xl font-bold text-center text-gray-800 mb-12 py-4 w-fit mx-auto px-8 rounded-full shadow-lg bg-gradient-to-r from-slate-50 to-red-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }} 
        >İletişim</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h3>
            
            <div className="mb-4 flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Adres:</h4>
                <p className="text-gray-600">{contactDetails.address}</p>
              </div>
            </div>
            
            <div className="mb-4 flex items-center gap-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Telefon:</h4>
                <p className="text-gray-600">{contactDetails.phone}</p>
              </div>
            </div>
            
            <div className="mb-4 flex items-center gap-4">
              <FaMobileAlt className="text-red-500 text-xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Cep Telefonu:</h4>
                <p className="text-gray-600">{contactDetails.mobile}</p>
              </div>
            </div>
          </motion.div>

          {/* Harita */}
          <motion.div
            className="bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.34106454908!2d29.765982317998926!3d40.77664293361352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb38797a2209c7%3A0x6b4efce8fd739982!2sYavuz%20Sultan%20Selim%2C%20Canda%C5%9F%20Sk.%20No%3A10%2C%2041780%20K%C3%B6rfez%2FKocaeli!5e0!3m2!1str!2str!4v1729695871876!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Harita"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
