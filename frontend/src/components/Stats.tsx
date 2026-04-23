import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaBriefcase, FaUsers } from 'react-icons/fa';



const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-accent mb-1 inline-block" dir="ltr">
      {count}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const [settings, setSettings] = useState({
    statSatisfaction: '100%',
    statYears: '15+',
    statProjects: '500+',
    statClients: '250+',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings({
            statSatisfaction: data.statSatisfaction || '100%',
            statYears: data.statYears || '15+',
            statProjects: data.statProjects || '500+',
            statClients: data.statClients || '250+'
          });
        }
      })
      .catch(err => console.error(err));
  }, []);

  const parseStat = (str: string) => {
    const value = parseInt(str.replace(/[^0-9]/g, '')) || 0;
    const suffix = str.replace(/[0-9]/g, '');
    return { value, suffix };
  };

  const dynamicStats = [
    { ...parseStat(settings.statSatisfaction), label: 'رضا العملاء', icon: <FaTrophy size={40} className="text-white/80" /> },
    { ...parseStat(settings.statYears), label: 'عام من الخبرة', icon: <FaAward size={40} className="text-white/80" /> },
    { ...parseStat(settings.statProjects), label: 'مشروع مكتمل', icon: <FaBriefcase size={40} className="text-white/80" /> },
    { ...parseStat(settings.statClients), label: 'عميل', icon: <FaUsers size={40} className="text-white/80" /> },
  ];

  return (
    <section className="relative py-16 bg-primary overflow-hidden border-y border-white/10 shadow-2xl">
      {/* Industrial Background Image with Dark Blue Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-20"
        style={{ backgroundImage: 'url("/engineer.png")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-primary/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {dynamicStats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex-1 flex items-center justify-center gap-6 w-full ${
                idx !== 0 ? 'md:border-r md:border-white/20' : ''
              }`}
            >
              <div className="flex flex-col text-right">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-white text-lg font-medium tracking-wide">{stat.label}</p>
              </div>
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;
