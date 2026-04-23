import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const certs = [
  { id: 1, img: '/certificate_placeholder_1776907513125.png', title: 'ISO 9001:2015', desc: 'نظام إدارة الجودة' },
  { id: 2, img: '/certificate_placeholder_1776907513125.png', title: 'ISO 14001:2015', desc: 'نظام إدارة البيئة' },
  { id: 3, img: '/certificate_placeholder_1776907513125.png', title: 'ISO 45001:2018', desc: 'نظام إدارة السلامة والصحة المهنية' },
  { id: 4, img: '/certificate_placeholder_1776907513125.png', title: 'IEC 61439', desc: 'المواصفة القياسية للوحات الكهربائية' },
  { id: 5, img: '/certificate_placeholder_1776907513125.png', title: 'شهادة المقاول المعتمد', desc: 'من الهيئة السعودية للمقاولين' },
];

const Certificates: React.FC = () => {
  return (
    <section id="الشهادات" className="py-20 bg-bg-light relative border-b border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 relative inline-block">
              شهاداتنا
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent rounded-full"></span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 font-medium">
              معتمدون من كبرى الجهات المحلية والدولية
            </p>
          </motion.div>
        </div>

        {/* Grid / Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-12">
          {certs.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex-1 flex flex-col items-center text-center w-full ${
                idx !== certs.length - 1 ? 'md:border-l md:border-gray-200' : ''
              } px-4`}
            >
              <div className="w-full max-w-[180px] aspect-[3/4] mb-6 bg-white p-2 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link to="/certificates" className="bg-primary hover:bg-[#081a2e] text-white font-bold py-3.5 px-10 rounded-lg shadow-md transition-colors text-lg inline-flex items-center gap-3">
            استعرض كافة اعتماداتنا
            <FaArrowLeft />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
