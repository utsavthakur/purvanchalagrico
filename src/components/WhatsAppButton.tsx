import React from 'react';
import { MessageCircle } from 'lucide-react';

const BUSINESS_DETAILS = {
  whatsapp: "919696874604"
};

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hello, I would like to know more about ACE Tractors.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
