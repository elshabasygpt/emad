import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const clients = [
  { id: 1, image: '/logo-1.png' },
  { id: 2, image: '/logo-2.png' },
  { id: 3, image: '/logo-3.png' },
  { id: 4, image: '/logo-4.png' },
  { id: 5, image: '/logo-5.png' },
];

const Clients: React.FC = () => {
  return (
    <section id="العملاء" className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary relative inline-block">
          شركاء النجاح
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
        </h2>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg font-medium">
          نفخر بثقة كبرى الشركات والمؤسسات في جودة لوحاتنا الكهربائية.
        </p>
      </div>

      {/* Infinite Logo Slider */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 hidden md:block pointer-events-none"></div>

        <motion.div 
          className="flex gap-20 md:gap-32 items-center whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {/* Duplicate the list multiple times to make the loop seamless */}
          {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 w-32 h-32"
            >
              <img 
                src={client.image} 
                alt={`Client ${client.id}`} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <Link to="/clients" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white inline-flex px-8 py-3 rounded-lg font-bold transition-all items-center gap-3">
          شاهد جميع العملاء وآرائهم
          <FaArrowLeft />
        </Link>
      </div>
    </section>
  );
};

export default Clients;
