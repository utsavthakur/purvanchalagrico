import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Star, ShieldCheck, ThumbsUp, CheckCircle, ArrowRight, Award, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BUSINESS_DETAILS = {
  phone: "09696874604",
};

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/hero_bg_1.png",
    "/hero_bg_2.png",
    "/hero_bg_3.png",
    "/hero_bg_4.png",
  ];

  const dynamicWords = ["Capacity", "Potentiality", "Prospect"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  const features = [
    {
      title: "Genuine Parts",
      description: "We only supply 100% authentic ACE spare parts to ensure the longevity of your machinery.",
      icon: <ShieldCheck className="w-8 h-8 text-[#1a4d2e]" />
    },
    {
      title: "Expert Mechanics",
      description: "Our team of certified technicians provides top-notch maintenance and repair services.",
      icon: <Award className="w-8 h-8 text-[#1a4d2e]" />
    },
    {
      title: "Quick Response",
      description: "Minimize your downtime with our efficient service and fast support turnaround.",
      icon: <Zap className="w-8 h-8 text-[#1a4d2e]" />
    },
    {
      title: "Farmer First",
      description: "Tailored solutions and flexible financial options designed specifically for small and large-scale farmers.",
      icon: <Users className="w-8 h-8 text-[#1a4d2e]" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              src={images[currentImageIndex]}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Elevating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#e87c1e]">Farming</span> <br className="hidden sm:block" />
              <div className="relative inline-block min-w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#e87c1e]"
                  >
                    {dynamicWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Invisible ghost text to maintain width */}
                <span className="opacity-0 pointer-events-none text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#e87c1e]">
                  Potentiality
                </span>
              </div>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-12">
              Empowering Indian farmers with advanced machinery, genuine service, and expert consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/services"
                className="w-full sm:w-auto px-10 py-4 bg-[#1a4d2e] hover:bg-[#133c23] text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#1a4d2e]/40 flex items-center justify-center group"
              >
                View Inventory
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Book a Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Purvanchal Agrico?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't just sell tractors; we build lifelong partnerships with our farmers.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#1a4d2e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Tractor Showcase Gallery */}
      <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Premium Fleet</h2>
            <p className="text-gray-600">The most powerful and efficient tractors for Indian soil.</p>
          </div>
          <Link to="/services" className="text-[#1a4d2e] font-bold flex items-center hover:underline group">
            View All Models <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex space-x-8 whitespace-nowrap"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 50, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {/* Duplicated for seamless loop */}
            {[
              "/tractors/img1.png", "/tractors/img5.png", "/tractors/img2.png", 
              "/tractors/img6.png", "/tractors/img3.png", "/tractors/img7.png", "/tractors/img8.png",
              "/tractors/img1.png", "/tractors/img5.png", "/tractors/img2.png", 
              "/tractors/img6.png", "/tractors/img3.png", "/tractors/img7.png", "/tractors/img8.png"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.1, y: -10 }}
                className="w-[400px] h-[300px] flex-shrink-0 flex items-center justify-center transition-all cursor-pointer group px-4"
              >
                <img 
                  src={img} 
                  alt={`Tractor ${idx}`} 
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-500" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
