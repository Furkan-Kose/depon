import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          
          {/* Logo ve İsim */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Image src="/depon.png" alt="Depon Logo" width={40} height={40} className="mr-2" />
              <h2 className="text-2xl font-bold">Depon</h2>
            </div>
            <p className="text-gray-400 mt-2 max-w-xs mx-auto md:mx-0">
              Yavuz Sultan Selim Mah., Candaş Sk. No:10 A Körfez/Kocaeli
            </p>
            <p className="text-gray-400 mt-1">Telefon: +90 262 348 1111</p>
            <p className="text-gray-400">Cep Telefonu: +90 541 256 42 72</p>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Bizi Takip Edin</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-gray-400 hover:text-white transition text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gray-400 hover:text-white transition text-2xl" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-gray-400 hover:text-white transition text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-8 text-center text-gray-400 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Depon. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
