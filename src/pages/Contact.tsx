import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, CheckCircle, Mail, PhoneCall } from 'lucide-react';

const BUSINESS_DETAILS = {
  name: "PURVANCHAL AGRICO",
  phone: "09696874604",
  secondaryPhone: "07880949216",
  email: "contact@purvanchalagrico.com",
  address: "Bhiduna, Machhali Shahar, Uttar Pradesh – 222165",
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Sales', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', service: 'Sales', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="">
      {/* Header - Professional Setup */}
      <section className="relative h-[350px] md:h-[500px] text-white overflow-hidden flex items-center px-6 md:px-[8%]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact.png" 
            alt="Contact Background" 
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[700px]"
          >
            <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#e87c1e]">Touch</span>
            </h1>
            <p className="text-lg md:text-3xl text-green-50 font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Whether you have a technical query or are looking to upgrade your farm, our experts are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="lg:col-span-1 space-y-6"
            >
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: [BUSINESS_DETAILS.phone, BUSINESS_DETAILS.secondaryPhone], color: "bg-blue-50 text-blue-600", link: `tel:${BUSINESS_DETAILS.phone}` },
                { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: [BUSINESS_DETAILS.email], color: "bg-green-50 text-green-600", link: `mailto:${BUSINESS_DETAILS.email}` },
                { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: [BUSINESS_DETAILS.address], color: "bg-orange-50 text-orange-600", link: "#map" },
                { icon: <Clock className="w-6 h-6" />, title: "Business Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"], color: "bg-purple-50 text-purple-600" }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all shadow-sm hover:shadow-md cursor-pointer"
                  onClick={() => card.link && (window.location.href = card.link)}
                >
                  <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}>
                    {card.icon}
                  </div>
                   <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-outfit">{card.title}</h3>
                    {card.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-lg text-gray-600">Thank you for reaching out. We've received your enquiry and our representative will contact you shortly.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name" 
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter phone number" 
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-all outline-none" 
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Product Interest</label>
                      <select 
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-all outline-none appearance-none"
                      >
                        <option value="Tractor">Select a Tractor Model</option>
                        <option value="Sales">ACE DI-350 Star</option>
                        <option value="Sales">ACE DI-450 Star</option>
                        <option value="Sales">ACE DI-550 Star</option>
                        <option value="Attachment">Custom Attachment</option>
                        <option value="Service">Spare Parts / Service</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Message</label>
                      <textarea 
                        rows={4} 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can we help you?" 
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1a4d2e] focus:border-[#1a4d2e] transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="md:col-span-2 py-4 md:py-5 bg-[#1a4d2e] text-white font-bold rounded-2xl hover:bg-[#133c23] transition-all shadow-xl shadow-[#1a4d2e]/20 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Google Map Integration */}
      <section id="map" className="h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <iframe 
          title="Purvanchal Agrico Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_DETAILS.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="filter contrast-[1.1] saturate-[1.2]"
        ></iframe>
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center">
            <MapPin className="w-4 h-4 text-[#1a4d2e] mr-2" />
            <span className="text-xs font-bold text-gray-800">Bhiduna, Machhali Shahar</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
