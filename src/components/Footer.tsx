import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Tractor } from 'lucide-react';

const BUSINESS_DETAILS = {
  name: "PURVANCHAL AGRICO",
  phone: "09696874604",
  address: "Bhiduna, Machhali Shahar, Uttar Pradesh – 222165",
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6 bg-white p-3 rounded-xl inline-flex">
              <img 
                src="/logo.png" 
                alt="Purvanchal Agrico Logo" 
                className="h-16 md:h-20 w-auto mr-3 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = document.getElementById('footer-fallback-logo');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div id="footer-fallback-logo" className="hidden items-center">
                <Tractor className="h-8 w-8 text-[#1a4d2e] mr-2" />
                <div className="flex flex-col justify-center">
                  <h2 className="font-extrabold text-xl text-[#1a4d2e] leading-none tracking-wide">PURVANCHAL</h2>
                  <div className="flex items-center justify-center mt-1">
                    <div className="h-[1px] w-3 bg-[#e87c1e]"></div>
                    <span className="text-sm text-[#e87c1e] font-bold tracking-widest leading-none mx-2">AGRICO</span>
                    <div className="h-[1px] w-3 bg-[#e87c1e]"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Your trusted partner for agricultural machinery and solutions in Uttar Pradesh. Providing power to your farming success.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#4ade80] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#4ade80] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#4ade80] transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#4ade80] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#4ade80] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#4ade80] flex-shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-[#4ade80] transition-colors text-base font-medium">{BUSINESS_DETAILS.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
          
          <div className="flex items-center mt-6 md:mt-0 space-x-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF9933] via-white to-[#128807] rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-300">
                <img 
                  src="/trust_badge.png" 
                  alt="Swadeshi & GPTW Sticker" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-medium text-gray-400">Designed for Growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
