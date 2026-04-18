import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Tractor } from 'lucide-react';

const BUSINESS_DETAILS = {
  name: "PURVANCHAL AGRICO",
  phone: "09696874604",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 h-[80px] flex items-center ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer h-full">
          <img 
            src="/logo.png" 
            alt="Purvanchal Agrico Logo" 
            className="h-full w-auto object-contain block"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('navbar-fallback-logo');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div id="navbar-fallback-logo" className="hidden items-center">
            <Tractor className={`h-8 w-8 ${scrolled ? 'text-[#1a4d2e]' : 'text-white'} mr-2`} />
            <div className="flex flex-col justify-center">
              <h1 className={`font-extrabold text-xl ${scrolled ? 'text-[#1a4d2e]' : 'text-white'} leading-none tracking-wide`}>PURVANCHAL</h1>
              <div className="flex items-center justify-center mt-1">
                <div className="h-[1px] w-3 bg-[#e87c1e]"></div>
                <span className="text-sm text-[#e87c1e] font-bold tracking-widest leading-none mx-2">AGRICO</span>
                <div className="h-[1px] w-3 bg-[#e87c1e]"></div>
              </div>
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `${isActive ? 'text-[#e87c1e]' : (scrolled ? 'text-gray-700' : 'text-white')} hover:text-[#e87c1e] font-medium transition-colors`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-[#1a4d2e] hover:bg-[#133c23] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-700' : 'text-white'}`}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t overflow-hidden absolute top-[80px] left-0 w-full z-[60] shadow-2xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `block w-full text-left px-4 py-4 text-lg font-bold rounded-2xl transition-all ${isActive ? 'bg-[#1a4d2e]/10 text-[#e87c1e]' : 'text-gray-900 hover:bg-gray-50'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="mt-6 flex items-center justify-center w-full bg-[#1a4d2e] text-white px-4 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#1a4d2e]/20">
                <Phone className="w-5 h-5 mr-3" />
                {BUSINESS_DETAILS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
