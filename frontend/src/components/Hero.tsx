import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaPhoneAlt, FaShieldAlt, FaCogs, FaClock } from 'react-icons/fa';

const panelImages = [
  '/electrical-panel.png',
  '/panel-2.png',
  '/panel-3.png'
];

const featuresData = [
  {
    icon: <FaShieldAlt size={26} className="text-accent" />,
    title: 'جودة وأمان',
    desc: 'أعلى معايير الجودة'
  },
  {
    icon: <FaCogs size={26} className="text-accent" />,
    title: 'تصنيع احترافي',
    desc: 'بأحدث المعدات'
  },
  {
    icon: <FaClock size={26} className="text-accent" />,
    title: 'الالتزام بالمواعيد',
    desc: 'دقة في التسليم'
  }
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [settings, setSettings] = useState({
    heroBadge: 'الجودة في كل تفصيلة',
    heroTitle: 'نصنع الكهرباء\nلنضمن استمرارية أعمالك',
    heroDescription: 'متخصصون في تصميم وتصنيع لوحات الجهد المنخفض وفق أعلى معايير الجودة والسلامة العالمية لخدمة القطاعات الصناعية والتجارية.'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings(prev => ({
            ...prev,
            heroBadge: data.heroBadge || prev.heroBadge,
            heroTitle: data.heroTitle || prev.heroTitle,
            heroDescription: data.heroDescription || prev.heroDescription
          }));
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % panelImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      {/* Gradient to make text readable: Darker on the right (RTL start), fading towards left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-l from-primary via-primary/90 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-white pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-6">
                <h3 className="text-accent text-sm md:text-base font-bold tracking-wide">{settings.heroBadge}</h3>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-6 drop-shadow-lg whitespace-pre-line">
                {settings.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
                {settings.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-3.5 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 transition-all">
                  طلب عرض سعر
                  <FaFileAlt />
                </button>
                <button className="btn-outline flex items-center justify-center gap-3 text-lg px-8 py-3.5 border-gray-400 text-white hover:border-white hover:bg-white/5 transition-all">
                  تواصل معنا
                  <FaPhoneAlt />
                </button>
              </div>
            </motion.div>

            {/* Integrated Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 border-t border-white/10"
            >
              {featuresData.map((feature, idx) => (
                <div key={idx} className={`flex items-center gap-3 ${idx !== 0 ? 'md:border-r md:border-white/10 md:pr-8' : ''}`}>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 shadow-inner">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Content (Panel Image) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[450px] group">
              {/* Decorative background glow to make the panel pop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/30 to-blue-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* The Panel Image Slider */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-500 group-hover:scale-[1.02] aspect-[4/5] w-full bg-primary/20">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={panelImages[currentImageIndex]}
                    alt={`لوحة توزيع كهربائية ${currentImageIndex + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </AnimatePresence>
                
                {/* Overlay to blend the image slightly with the theme if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                {/* Slider Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {panelImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-accent' : 'w-2 bg-white/50 hover:bg-white'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
