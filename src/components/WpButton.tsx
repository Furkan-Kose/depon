import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/905412564272"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 flex items-center bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp size={24} className="sm:mr-2" />
      <span className="hidden sm:inline font-semibold">Bize Ulaşın</span>
    </a>
  );
};

export default WhatsappButton;
