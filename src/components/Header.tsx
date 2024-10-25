"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleLinkClick = () => {
        setOpen(false);
      };

      const handleMenuToggle = () => {
        if (open) {
          setClosing(true);
          setTimeout(() => {
            setOpen(false); 
            setClosing(false);
          }, 500); 
        } else {
          setOpen(true); 
        }
      };

  return (
    <header 
        className={`w-full flex items-center fixed top-0 z-50 transition-colors duration-300 ${
        scroll ? 'bg-gray-100 bg-opacity-70 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
        <div className='flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-2 md:py-4 w-full'>
            <Link href='/'>
                <Image src='/depon.png' alt='logo' width={80} height={80} className='' />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
                className="relative flex flex-col justify-center items-center w-6 h-6 md:hidden z-30"
                onClick={handleMenuToggle}
            >
                <div
                    className={`absolute bg-black w-6 h-0.5 transition-transform duration-300 ${
                    open ? 'rotate-45' : '-translate-y-2'
                    }`}
                ></div>
                <div
                    className={`absolute bg-black w-6 h-0.5 transition-opacity duration-300 ${
                    open ? 'opacity-0' : ''
                    }`}
                ></div>
                <div
                    className={`absolute bg-black w-6 h-0.5 transition-transform duration-300 ${
                    open ? '-rotate-45' : 'translate-y-2'
                    }`}
                ></div>
            </button>


            {/* Desktop Menu */}
            <nav className='hidden md:flex gap-5 text-black font-semibold'>
                <ul className='flex gap-5'>
                    <li>
                        <Link href="/" className=''>Ana Sayfa</Link>
                    </li>
                    <li>
                        <Link href='#hizmetlerimiz' className=''>Hizmetlerimiz</Link>
                    </li>
                    <li>
                        <Link href='#referanslar' className=''>Referanslar</Link>
                    </li>
                    <li>
                        <Link href='#iletisim' className=''>İletişim</Link>
                    </li>
                </ul>
            </nav>
        </div>

        {/* Mobile Menu */}
      {open && (
        <nav className={`fixed inset-0 flex items-center justify-center bg-gradient-to-r from-slate-50 to-red-200 md:hidden w-screen h-screen ${
            closing ? "menu-closed" : "menu-open"
          }`}>
          <ul className="h-full flex flex-col items-center justify-center gap-8 text-black text-2xl">
            <li><Link href="/" onClick={() => setOpen(false)}>Ana Sayfa</Link></li>
            <li><Link href="#hizmetlerimiz" onClick={handleMenuToggle}>Hizmetlerimiz</Link></li>
            <li><Link href="#referanslar" onClick={handleMenuToggle}>Referanslar</Link></li>
            <li><Link href="#iletisim" onClick={handleMenuToggle}>İletişim</Link></li>
          </ul>
        </nav>
      )}

<style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .menu-open {
          animation: slideIn 0.5s forwards;
        }

        .menu-closed {
          animation: slideOut 0.5s forwards;
        }
      `}</style>
    </header>
  )
}

export default Header