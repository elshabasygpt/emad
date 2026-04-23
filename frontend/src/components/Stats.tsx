import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaBriefcase, FaUsers } from 'react-icons/fa';

const stats = [
  { value: 100, label: 'رضا العملاء', suffix: '%', icon: <FaTrophy size={40} className="text-white/80" /> },
  { value: 15, label: 'عام من الخبرة', suffix: '+', icon: <FaAward size={40} className="text-white/80" /> },
  { value: 500, label: 'مشروع مكتمل', suffix: '+', icon: <FaBriefcase size={40} className="text-white/80" /> },
  { value: 250, label: 'عميل', suffix: '+', icon: <FaUsers size={40} className="text-white/80" /> },
];

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
          
          {stats.map((stat, idx) => (
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
