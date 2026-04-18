import React from 'react';
import { motion } from 'motion/react';
import { Tractor, Wrench, Settings, ArrowRight, CheckCircle2, Truck, ClipboardCheck, Sprout, Cog, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceChapters = [
    {
      title: "Sales & Distribution",
      subtitle: "The Gateway to ACE Engineering",
      description: "Direct access to the full lineup of ACE Tractors, from compact utility models to heavy-duty powerhouses. We bridge the gap between world-class engineering and your field.",
      icon: <Tractor className="w-16 h-16" />,
      image: "/hero_bg_2.png",
      features: [
        { title: "New Model Launches", desc: "Be the first to experience the latest innovations in tractor technology." },
        { title: "Demo & Trial Runs", desc: "Test the power on your own terms before making a commitment." },
        { title: "Documentation Support", desc: "Seamless handling of registration, permits, and paperwork." }
      ],
      color: "border-[#1a4d2e]"
    },
    {
      title: "Service & Maintenance",
      subtitle: "Precision Care for Peak Performance",
      description: "Our state-of-the-art service center is equipped with factory diagnostic tools and trained personnel to keep your heartbeat of the farm healthy.",
      icon: <Wrench className="w-16 h-16" />,
      image: "/hero_bg_3.png",
      features: [
        { title: "On-Field Assistance", desc: "Our mobile workshops bring expert care directly to your doorstep." },
        { title: "Preventive Maintenance", desc: "Scheduled check-ups to avoid costly downtime and repairs." },
        { title: "Engine Overhauling", desc: "Complete restoration services to bring back factory-new power." }
      ],
      color: "border-[#e87c1e]"
    },
    {
      title: "Genuine Parts",
      subtitle: "The DNA of Longevity",
      description: "An extensive inventory of original ACE spare parts to ensure the perfect fit and maximum performance for every model year.",
      icon: <Settings className="w-16 h-16" />,
      image: "/hero_bg_4.png",
      features: [
        { title: "Ready Stock", desc: "Never wait for essentials; our inventory is monitored in real-time." },
        { title: "Doorstep Delivery", desc: "Fast logistics to get parts to your village or farm within 24 hours." },
        { title: "Genuine Warranty", desc: "Full peace of mind with replacement guarantees on all authentic parts." }
      ],
      color: "border-gray-900"
    }
  ];

  return (
    <div className="bg-white">
      {/* Premium Raw Header - Best Professional Setup */}
      <section className="relative h-[650px] bg-white overflow-hidden flex items-center px-[8%]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/services.png" 
            alt="Services Header" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[700px]"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              Elite Services
            </h1>
            <p className="text-xl md:text-3xl text-white font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Providing the highest standard of agricultural machinery support, genuine parts, and expert engineering consultancy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Chapters Showcase */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "url('/services.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="relative z-10">
          {serviceChapters.map((chapter, i) => (
            <div key={i} className={`py-32 ${i % 2 === 1 ? 'bg-neutral-50/70' : 'bg-white/70'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2"
                >
                  <div className={`inline-block py-2 px-6 border-l-4 ${chapter.color === 'border-gray-900' ? 'border-black' : chapter.color} bg-neutral-100 text-neutral-900 font-bold tracking-widest text-xs uppercase mb-8`}>
                    Chapter {i + 1}: {chapter.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 leading-tight">
                    {chapter.title}
                  </h2>
                  <p className="text-xl text-neutral-600 mb-12 leading-relaxed border-l-2 border-neutral-100 pl-8">
                    {chapter.description}
                  </p>
                  
                  <div className="space-y-10">
                    {chapter.features.map((feature, idx) => (
                      <div key={idx} className="flex group">
                        <div className={`mt-1.5 w-6 h-6 rounded-full border-2 ${chapter.color === 'border-gray-900' ? 'border-black' : chapter.color} flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-[#1a4d2e] group-hover:border-[#1a4d2e] transition-colors`}>
                          <div className="w-1.5 h-1.5 bg-neutral-900 group-hover:bg-white rounded-full transition-colors"></div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#1a4d2e] transition-colors">{feature.title}</h4>
                          <p className="text-neutral-500">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 relative"
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img src={chapter.image} alt={chapter.title} className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white">
                        <div className="mb-4">{chapter.icon}</div>
                        <p className="font-bold text-lg uppercase tracking-widest">{chapter.title}</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 border-b-8 border-r-8 ${chapter.color} rounded-br-3xl hidden lg:block opacity-30`}></div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Value Added <span className="text-green-400">Support</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Beyond the machine, we provide the infrastructure for your success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Truck className="w-8 h-8" />, title: "Extended Warranty", desc: "Manufacturer-backed protection plans." },
              { icon: <ClipboardCheck className="w-8 h-8" />, title: "Finance Assistance", desc: "Flexible banking and loan partnerships." },
              { icon: <Sprout className="w-8 h-8" />, title: "Modern Agronomy", desc: "Expert guidance on modern farming." },
              { icon: <Cog className="w-8 h-8" />, title: "Equipment Training", desc: "Safe and efficient operator induction." }
            ].map((support, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all cursor-default text-center group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-green-500 group-hover:text-white transition-all">
                  {support.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{support.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{support.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Support <span className="text-[#1a4d2e]">Intel</span> & FAQs</h2>
            <p className="text-gray-500 text-xl">Quick answers to frequently asked questions from our farming community.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Do you provide home service?",
                a: "Yes, we have mobile mechanical units that can reach your farm for minor repairs and routine servicing. Our expert technicians are equipped to handle most on-field challenges to minimize your downtime."
              },
              {
                q: "How long is the delivery time?",
                a: "Ready models are delivered within 48 hours of purchase. For custom attachments or specific specialized configurations, it may take 5-7 business days depending on availability."
              },
              {
                q: "What warranty do you offer?",
                a: "All our new ACE tractors come with a comprehensive manufacturer's warranty. We also provide dedicated post-warranty service packages to keep your machinery in top condition."
              },
              {
                q: "Do you offer financial assistance?",
                a: "Absolutely. We have partnerships with leading banks and financial institutions to provide easy EMIs and flexible loan options tailored for Indian farmers."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b-2 border-gray-100 pb-8 open:border-[#1a4d2e] transition-all duration-500">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                  <h4 className="text-2xl font-bold text-gray-900 group-open:text-[#1a4d2e] transition-colors">{faq.q}</h4>
                  <div className="relative flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300">
                    <ChevronRight className="w-8 h-8 text-gray-300 group-open:text-[#1a4d2e]" />
                  </div>
                </summary>
                <div className="mt-4 text-xl text-gray-500 leading-relaxed max-w-3xl">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
