import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaAward, FaHeadset } from 'react-icons/fa';

const About: React.FC = () => {
  const [settings, setSettings] = useState({
    aboutTitle: 'من نحن',
    aboutText: 'نحن مصنع عماد الحلواني للوحات الكهربائية، نمتلك خبرة طويلة في مجال تصميم وتصنيع اللوحات الكهربائية بمختلف أنواعها. ونلتزم بتقديم أعلى مستويات الجودة والموثوقية لعملائنا في جميع القطاعات.'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings(prev => ({
            ...prev,
            aboutTitle: data.aboutTitle || prev.aboutTitle,
            aboutText: data.aboutText || prev.aboutText
          }));
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="من نحن" className="bg-primary relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side: Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
        >
          {/* Overlay gradient to blend the edge slightly into the blue if needed */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 hidden lg:block"></div>
          <div className="absolute inset-0 bg-primary/20 z-0 mix-blend-multiply"></div>
          <img 
            src="/engineer.png" 
            alt="فني يعمل على لوحة كهربائية" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 z-20"
        >
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 relative inline-block">
              {settings.aboutTitle}
              <span className="absolute -bottom-3 right-0 w-16 h-1.5 bg-accent rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12 font-medium">
            {settings.aboutText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 border-t border-b border-white/10 py-8">
            <div className="flex flex-col items-center text-center">
              <FaUserTie className="text-accent text-4xl mb-3" />
              <h4 className="text-white font-bold">فريق هندسي<br/>متخصص</h4>
            </div>
            
            <div className="flex flex-col items-center text-center sm:border-r sm:border-white/10">
              <FaAward className="text-accent text-4xl mb-3" />
              <h4 className="text-white font-bold">التزام تام<br/>بمعايير الجودة</h4>
            </div>
            
            <div className="flex flex-col items-center text-center sm:border-r sm:border-white/10">
              <FaHeadset className="text-accent text-4xl mb-3" />
              <h4 className="text-white font-bold">دعم فني<br/>متواصل</h4>
            </div>
          </div>

          <div>
            <button className="btn-primary px-10 py-3.5 text-lg shadow-lg hover:shadow-accent/20">
              اقرأ المزيد عنا
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
