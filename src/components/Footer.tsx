import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo ve İsim */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <div className='flex items-center'>
              <Image src="/depon.png" alt="Depon Logo" width={50} height={50} className="mr-2" />
              <h2 className="text-xl font-bold">Depon</h2>
            </div>
            <div className="mt-2">
              <p className="text-gray-400">Adres: Yavuz Sultan Selim Mah., Candaş Sk. No:10 A Körfez/Kocael</p>
              <p className="text-gray-400">Telefon: +90 262 348 1111</p>
              <p className="text-gray-400">Cep Telefonu: +90 541 256 42 72</p>
            </div>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-2">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF size={24} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={24} className="text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="text-center mt-6">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Depon. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
