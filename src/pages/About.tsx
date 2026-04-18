import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, History, Users, ShieldCheck } from 'lucide-react';
const About = () => {
  const values = [
    {
      title: "Trust",
      description: "Transparency in every deal and reliability in every machine we deliver.",
      icon: <Target className="w-10 h-10 text-[#1a4d2e]" />
    },
    {
      title: "Innovation",
      description: "Bringing the latest agricultural technologies to the heart of rural Uttar Pradesh.",
      icon: <Eye className="w-10 h-10 text-[#1a4d2e]" />
    },
    {
      title: "Commitment",
      description: "We are committed to the success and prosperity of our local farming community.",
      icon: <Heart className="w-10 h-10 text-[#1a4d2e]" />
    }
  ];

  return (
    <div className="">
      {/* Header - Professional Setup */}
      <section className="relative h-[600px] text-white overflow-hidden flex items-center px-[8%]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about.png" 
            alt="About Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        <div className="relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[800px]"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#e87c1e]">Purvanchal Agrico</span>
            </h1>
            <p className="text-xl md:text-3xl text-green-50 font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              A legacy of trust, powering the dreams of farmers in Uttar Pradesh since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-green mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Purvanchal Agrico</strong>, we understand that a tractor is more than just a piece of machinery—it’s the heartbeat of a farm and the primary source of livelihood for many. Founded in the heart of Machhali Shahar, we set out with a simple goal: to make world-class agricultural machinery accessible to every farmer in our region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              As an authorized ACE Tractors dealer, we pride ourselves on being more than just a showroom. We are a support system. Over the years, we have grown from a small dealership to a comprehensive agricultural hub, providing sales, service, and genuine parts under one roof.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a4d2e]/10 rounded-xl flex items-center justify-center mr-4">
                    <History className="w-6 h-6 text-[#1a4d2e]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Heritage</h3>
                </div>
                <p className="text-gray-600">Established with a vision to revolutionize local agriculture, we have consistently ranked as a top dealer by prioritizing farmer satisfaction above all else.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a4d2e]/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[#1a4d2e]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Community</h3>
                </div>
                <p className="text-gray-600">We don't just work in Machhali Shahar; we belong here. We actively engage with local farmers to understand their unique challenges and provide tailored machinery solutions.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Values We Live By</h2>
            <div className="w-24 h-1 bg-[#e87c1e] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {values.map((v, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 transition-all cursor-default"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-[#1a4d2e]">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <div className="inline-block p-4 bg-green-50 rounded-full mb-8">
            <ShieldCheck className="w-12 h-12 text-[#1a4d2e]" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Authorized & Certified</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Every ACE tractor sold through Purvanchal Agrico comes with the manufacturer's warranty and the assurance of 100% genuine parts and factory-trained service.
          </p>
          <div className="flex justify-center flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/trust_badge.png" alt="Sticker" className="h-16 w-auto" />
            <div className="h-8 w-px bg-gray-200"></div>
            <span className="text-2xl font-bold text-gray-400">ACE Authorized Dealer</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
